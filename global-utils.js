const parse = require("html-react-parser")
const replaceAll = require("string.prototype.replaceall")
const striptags = require("striptags")
const axios = require("axios")

/**/ ;(function (exports) {
  exports.sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   *
   * Limits a phrase to a certain number of characters without cutting off words.
   *
   * @param {*} str = string to shorten
   * @param {*} maxLen = how many characters you want it to have
   * @param {*} separator = separator between words
   */
  exports.shortenString = function (str, maxLen = 100, separator = " ") {
    if (str.length <= maxLen) return str
    return str.substr(0, str.lastIndexOf(separator, maxLen))
  }

  /**
   * Extracts everything after "Tags: " that is found in a gumroad description
   *
   * @param {*} description = gumroad description
   */
  exports.extractTagsFromGumroad = function (description) {}

  /**
   * Sanitizes all the e-junkie and gumroad products coming from Graphql Wordpress' API: https://www.ezfy.club/json/custom/products
   *
   * This data is coming from the function productsQuery() in utils.js
   *
   * Parameters:
   *
   * @param {object} data = All the ejunkie and gumroad products.
   * @param {bool} graphql = Graphql (true) or REST API (false)
   */
  exports.sanitizeProducts = function (data, graphql = false) {
    const _data = graphql ? data.allWordpressProducts.edges[0].node : data

    const ejunkie = _data.ejunkie.products
    const gumroad = _data.gumroad.products

    let products = []

    ejunkie.map(e => {
      const price = e.sub_items
        .map(el => el.price)[0]
        .replace("$", "")
        .replace(".00", "")

      const _slug = e.name
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .split(" ")
        .join("-")

      const slug = replaceAll(_slug, "--", "-")

      if (slug === "ezfy-service") {
        return null
      }

      const tags = e.tags
        .map(e => {
          if (!e) {
            return
          }

          if (e.includes(";")) {
            return e
          }

          return `${e.trim()};`
        })
        .join("")
        .split(";")
        .filter(e => e !== "")
        .map(e => e.trim())

      return products.push({
        id: e.number,
        title: e.name,
        price,
        tags,
        miniDescription: e.description,
        description: e.details,
        thumbnail: e.images[0],
        slug,
        url: `https://ezfy.e-junkie.com/product/${e.number}`,
        addToCart: `https://www.fatfreecartpro.com/ecom/gb.php?&c=cart&ejc=2&cl=374804&i=${e.number}`,
      })
    })

    gumroad.map(e => {
      if (!e.published) {
        return
      }

      var _word = e.short_url.split("/")
      const _slug = _word[_word.length - 1]

      const slug = replaceAll(_slug, "--", "-")

      const miniDescription = `${exports.shortenString(e.description)} (...)`

      const getTags = () => {
        const query = `tags: `
        const _tags = e.description.toLowerCase()

        if (_tags.includes(query)) {
          const _temp = striptags(_tags.split(query)[1])

          return _temp.split(";").filter(e => e !== `` && e !== `"`)
        }

        return []
      }

      return products.push({
        id: e.wordpress_id,
        title: e.name,
        price: /0\+/.test(e.formatted_price)
          ? "Free"
          : e.formatted_price.replace("$", ""),
        slug,
        tags: getTags(),
        miniDescription,
        description: e.description,
        thumbnail: e.preview_url,
        url: e.short_url,
      })
    })

    return products.filter(e => e !== null).sort((a, b) => b.id - a.id)
  }

  function populateWithRelatedProducts(allProducts) {
    return allProducts.map(product => {
      if (product.relatedProducts && product.relatedProducts.length >= 1) {
        var updatedRelatedProducts = []
        var relatedProducts = product.relatedProducts

        relatedProducts.map(_relatedProductID => {
          const currentRelatedProduct = allProducts.filter(
            all => all.id === _relatedProductID
          )[0]
          console.log("current ", currentRelatedProduct.title)

          updatedRelatedProducts.push({ ...currentRelatedProduct })
        })

        product.relatedProducts = updatedRelatedProducts
        console.log(updatedRelatedProducts)
      }

      return product
    })
  }

  /**
   *
   * Sanitizes Ecwid products to create product pages.
   *
   * @param {*} _data = data coming from Ecwid's API
   * @returns
   */

  exports.sanitizeEcwidProducts = async function (ecwidData, graphql = false) {
    const _rawProducts = graphql
      ? ecwidData.allWordpressProducts.edges[0].node.ecwid.items
      : ecwidData

    console.log("ECWID PRODUCTS : ", _rawProducts)

    return new Promise(async (resolve, reject) => {
      const { data: _categories } = await axios.get(
        `https://app.ecwid.com/api/v3/61271341/categories?token=public_iNxZWDXrKMZrzGkdBWk3fvcfaJhBVgcm`
      )

      // console.log("my data: ", data)
      const allCategories = _categories.items

      let products = []

      _rawProducts.map(async product => {
        if (!product.hasOwnProperty("name")) {
          return
        }

        console.log("CURR PROD: ", product)

        const id = product.id ? product.id : product.wordpress_id
        const _slug = product.name
          .replace(/[^\w\s]/gi, "")
          .toLowerCase()
          .split(" ")
          .join("-")

        const slug = replaceAll(_slug, "--", "-")

        const getTags = () => {
          let all = []

          product.categories.map(i => {
            if (!i.enabled) {
              return
            }

            const name = allCategories.filter(x => x.id === i.id)[0].name

            console.log("LOOK NAME", name)
            all.push(name)
          })

          return all
        }

        const getLiveDemoLink = () => {
          let link = null

          product.hasOwnProperty("attributes") &&
            product.attributes.map(attribute => {
              try {
                if (
                  attribute.hasOwnProperty("name") &&
                  attribute.name.toLowerCase() === "demo"
                ) {
                  link = attribute.value
                }
              } catch (err) {
                return
              }
            })

          return link
        }

        // const getRelatedProducts = async () => {
        //   return new Promise(async (resolve, reject) => {
        //     let allRelatedProducts = []

        //     console.log("CURRENT LOOP: ", product, product.relatedProducts)

        //     if (
        //       !product.hasOwnProperty("relatedProducts") ||
        //       product.relatedProducts.productIds.length <= 0
        //     ) {
        //       return null
        //     }

        //     product.relatedProducts.productIds.map(async relatedProductID => {

        //     })

        //     console.log("THIS IS #### loop end")

        //     resolve(allRelatedProducts)
        //   })
        // }

        const tags = getTags()
        const liveDemo = getLiveDemoLink()
        // const relatedProducts = getRelatedProducts()

        return products.push({
          id,
          title: product.name,
          rawPrice: product.price,
          rawComparePrice: product.compareToPrice,
          price: product.defaultDisplayedPriceFormatted,
          comparePrice: product.compareToPriceFormatted,
          tags,
          miniDescription: product.subtitle,
          description: product.description,
          thumbnail: product.thumbnailUrl,
          image: product.originalImageUrl,
          slug,
          liveDemo,
          relatedProducts: product.relatedProducts.productIds,
        })
      })

      const populatedProducts = populateWithRelatedProducts(products)

      // Adds "related products" to product
      // let products = []

      resolve(
        populatedProducts
          .filter(each => each !== null)
          .sort((a, b) => b.id - a.id)
      )
    })
  }
})(typeof exports === "undefined" ? (this.globalUtils = {}) : exports)

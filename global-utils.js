const parse = require("html-react-parser")
const replaceAll = require("string.prototype.replaceall")
/**/ ;(function (exports) {
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
   * Sanitizes all the e-junkie and gumroad products coming from Graphql Wordpress' API.
   *
   * This data is coming from the function productsQuery() in utils.js
   *
   * Parameters:
   *
   * @param {object} data = All the ejunkie and gumroad products.
   * @param {bool} graphql = Graphql (true) or REST API (false)
   */
  exports.sanitizeProducts = function (data, graphql = true) {
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

      return products.push({
        id: e.number,
        title: e.name,
        price,
        tags: e.tags,
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

      return products.push({
        id: e.wordpress_id,
        title: e.name,
        price: /0\+/.test(e.formatted_price)
          ? "Free"
          : e.formatted_price.replace("$", ""),
        slug,
        tags: [],
        miniDescription,
        description: e.description,
        thumbnail: e.preview_url,
        url: e.short_url,
      })
    })

    return products
  }
})(typeof exports === "undefined" ? (this.globalUtils = {}) : exports)

const parse = require("html-react-parser")

/**/ ;(function (exports) {
  /**
   * Sanitizes all the e-junkie and gumroad products coming from Graphql Wordpress' API.
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

      const slug = e.name
        .replace(/[^\w\s]/gi, "")
        .toLowerCase()
        .split(" ")
        .join("-")

      return products.push({
        title: e.name,
        price,
        SEODescription: "",
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
      var slug = _word[_word.length - 1]
      const SEOdescription = parse(e.description)

      return products.push({
        title: e.name,
        price: /0\+/.test(e.formatted_price)
          ? "Free"
          : e.formatted_price.replace("$", ""),
        slug,
        SEOdescription,
        description: e.description,
        thumbnail: e.preview_url,
        url: e.short_url,
      })
    })

    return products
  }
})(typeof exports === "undefined" ? (this.globalUtils = {}) : exports)

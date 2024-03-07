const axios = require("axios")
const path = require("path")

const globalUtils = require("./global-utils.js")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const { data: blogPosts } = await axios.get(
    "https://ezfy.club/json/wp/v2/posts?per_page=100"
  )

  const { data: ecwidProducts } = await axios.get(
    `https://app.ecwid.com/api/v3/61271341/products?token=public_iNxZWDXrKMZrzGkdBWk3fvcfaJhBVgcm`
  )

  const products = await globalUtils.sanitizeEcwidProducts(ecwidProducts.items)

  blogPosts.map(async e => {
    return createPage({
      path: `blog/${e.slug}`,
      component: path.resolve("./src/layouts/BlogPostLayout.js"),
      context: e,
    })
  })

  products.map(async product => {
    return createPage({
      path: `shop/${product.slug}`,
      component: path.resolve("./src/layouts/ProductLayout.js"),
      context: product,
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

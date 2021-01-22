const axios = require("axios")
const path = require("path")

const globalUtils = require("./global-utils.js")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const { data: blogPosts } = await axios.get(
    "https://ezfy.club/json/wp/v2/posts"
  )
  const { data: _products } = await axios.get(
    `https://ezfy.club/json/custom/products`
  )
  const products = globalUtils.sanitizeProducts(_products, (graphql = false))

  blogPosts.map(async e => {
    return createPage({
      path: `blog/${e.slug}`,
      component: path.resolve("./src/layouts/BlogPostLayout.js"),
      context: e,
    })
  })

  products.map(e => {
    return createPage({
      path: `shop/${e.slug}`,
      component: path.resolve("./src/layouts/ProductLayout.js"),
      context: e,
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

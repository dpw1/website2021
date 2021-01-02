const axios = require("axios")
const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const { data } = await axios.get("https://ezfy.club/json/wp/v2/posts")

  return data.map(async e => {
    return createPage({
      path: `blog/${e.slug}`,
      component: path.resolve("./src/layouts/BlogPostLayout.js"),
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

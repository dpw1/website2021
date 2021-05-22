/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const config = require("./data/config")

config

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: `https://ezfycode.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-use-query-params",
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-console`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,500,600,600i,700`],
        display: "swap",
      },
    },

    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://ezfycode.com`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby`,
        start_url: `/`,
        icon: `src/copy/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TR7HFTW",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
    },

    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "ezfy.club",
        protocol: "https",
        restApiRoutePrefix: "json",
        hostingWPCOM: false,
        useACF: true,
        solve: "gatsby-source-wordpress",
        minimizeDeprecationNotice: true,
        includedRoutes: ["**/posts", "**/custom", "**/products"],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names,
        whitelistPatterns: [
          /^fancybox/,
          /^wp-block-table/,
          /^Product/,
          /^Product-/,
        ],
        whitelist: ["wp-block-table", "Product-text"],
        ignore: [
          "custom.scss",
          "Product.scss",
          "ProductItem.scss",
          "BlogContent.scss",
          "SalesPop.scss",
          "Loader.scss",
          "License.scss",
          "CartEcwid.scss",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-minify`,
      options: {
        removeAttributeQuotes: false,
        removeEmptyAttributes: false,
        removeScriptTypeAttributes: false,
      },
    },
  ],
}

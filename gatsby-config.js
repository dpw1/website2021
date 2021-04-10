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
    `gatsby-plugin-modal-routing`,
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-112401482-2",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 1956203,
        sv: 6,
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
        ],
      },
    },
  ],
}

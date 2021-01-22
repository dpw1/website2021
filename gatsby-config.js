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
    // {
    //   resolve: "@pasdo501/gatsby-source-woocommerce",
    //   options: {
    //     api: "ezfy.club",
    //     verbose: true,
    //     https: true,
    //     api_keys: {
    //       consumer_key: "ck_b6e7a664a990126845ac2afb13895b24265c6585",
    //       consumer_secret: "cs_d8179cf4bb659b0b61195e3104ef4492a73af246",
    //     },
    //     fields: ["products"],
    //     // Send the API keys as query string parameters instead of using the authorization header
    //     // OPTIONAL: defaults to false
    //     query_string_auth: false,
    //     // Version of the woocommerce API to use
    //     // OPTIONAL: defaults to 'wc/v3'
    //     api_version: "wc/v3",
    //     // OPTIONAL: How many results to retrieve *per request*
    //     per_page: 100,
    //     // OPTIONAL: Custom WP REST API url prefix, only needed if not using
    //     // the default wp-json prefix.
    //     wpAPIPrefix: "json",
    //     // OPTIONAL: Support for URLs with ports, e.g. 8080; defaults to no port
    //     port: "8080",
    //     // OPTIONAL: Encoding; default to 'utf8'
    //     encoding: "utf8",
    //   },
    // },
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
        whitelistPatterns: [/^fancybox/, /^wp-block-table/],
        whitelist: ["wp-block-table"],
        ignore: ["custom.scss"],
      },
    },
  ],
}

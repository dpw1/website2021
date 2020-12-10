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

    `gatsby-plugin-sass`,
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
        includeInDevelopment: true,
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
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "ezfy.club/",
        protocol: "https",
        restApiRoutePrefix: "json",
        hostingWPCOM: false,
        useACF: true,
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        searchAndReplaceContentUrls: {
          sourceUrl: "https://source-url.com",
          replacementUrl: "https://replacement-url.com",
        },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
  ],
}

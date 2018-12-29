module.exports = {
  siteMetadata: {
    title: `Pizza Academy`,
    siteUrl: `https://pizzaacademy.com`,
    tagline: `Subs, Salads & Roast Beef`,
    description: `Open 7 days a week, and we deliver all day.`
  },
  plugins: [
    // Sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: `src`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`
      }
    },

    // Transformers
    `gatsby-transformer-sharp`,
    `gatsby-transformer-yaml`,

    // Plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-39995938-4`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-lodash`,
    `gatsby-plugin-sharp`,

    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify-cache`
  ]
}

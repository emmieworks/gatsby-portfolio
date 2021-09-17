module.exports = {
  siteMetadata: {
    title: `Zero Forest Portfolio`,
    description: `フリーランスWebデザイナー・エンジニアEmiのポートフォリオサイトです`,
    author: `@emmie0works`,
    siteUrl: `https://portfolio.0forest.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zero Forest`,
        short_name: `0forest`,
        start_url: `/`,
        background_color: `#725444`,
        theme_color: `#725444`,
        display: `minimal-ui`,
        icon: `src/images/logo-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

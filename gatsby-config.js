module.exports = {
  siteMetadata: {
    title: `Zero*Forest`,
    description: `フリーランスWebデザイナー・エンジニアEmiのポートフォリオサイトです`,
    author: `Emi`,
    siteUrl: `https://portfolio.0forest.com/`,
    social: {
      twitter: `emmie0works`,
      github: `emmieworks`,
      pinterest: `0forest`,
      instagram: `emmieworks`,
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`, `auto`],
          quality: 90,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/gallery`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal:false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-RJYFP2KR3V"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zero Forest`,
        short_name: `0forest`,
        start_url: `/`,
        background_color: `#725444`,
        theme_color: `#725444`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

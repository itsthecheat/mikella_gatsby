
 require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
  title: `Mikella Millen LCAT, ATR-BC`,
  siteUrl: `http://www.mikellamillen.com`,
  description: `Art Therapist with private practice in Manhattan`,
},
  plugins: [
   `gatsby-plugin-styled-components`,
   `gatsby-transformer-sharp`,
   `gatsby-plugin-sharp`,
   `gatsby-plugin-smoothscroll`,
   `gatsby-transformer-yaml`,
    `gatsby-plugin-mdx`,
  {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Mikella Millen`,
    short_name: `Mikella Millen`,
    start_url: `/`,
    icon: `static/favicon-32x32.png`,
    background_color: `#000000`,
    theme_color: `#ffffff`,
    display: `standalone`,
      },
    },
  {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `content`,
    path: `${__dirname}/src/content`,
  },
},
{
  resolve: `gatsby-source-prismic`,
  options: {
    repositoryName: `mikellamillen`,
    linkResolver: () => (page) => `/${page.uid}`,
    schemas: {
        page: require('./src/schemas/page.json'),
        splash: require('./src/schemas/splash.json'),
      },
    accessToken: `${process.env.API_KEY}`,
    shouldDownloadImage: ({ node, key, value }) => { return true },
  },
},
 ],
}

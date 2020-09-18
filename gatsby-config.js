/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
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
   `gatsby-transformer-remark`,
   `gatsby-plugin-smoothscroll`,
   `gatsby-transformer-yaml`,
   `gatsby-plugin-mdx`,
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

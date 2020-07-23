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
  title: `Mikella Millen`,
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
  resolve: `@prismicio/gatsby-source-prismic-graphql`,
  options: {
    repositoryName: `mikella`,
        pages: [{
        type: 'Page',
        match: '/:uid',
        path: '/preview',
        component: require.resolve('./src/templates/page-template.js'),

    }],
    previews: true,
    path: '/preview',
    defaultLang: 'en-us',
    accessToken: `${process.env.API_KEY}`,
  },
},
 ],
}

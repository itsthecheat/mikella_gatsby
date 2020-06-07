/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
  title: `Mikella Millen`,
  siteUrl: `http://www.mikellamillen.com`,
  description: `Art Therapist with private practice in Manhattan`,
},
  plugins: [

   `gatsby-plugin-layout`,
     // options: {
     //   component: require.resolve(`./src/layouts/layout`),
     // },

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
 ],
}

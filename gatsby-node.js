const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all Pages with their IDs and template data.
  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          id
          uid
          url
        }
      }
    }
  `)

  // Create pages for each Page in Prismic using the selected template.
  pages.data.allPrismicPage.nodes.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(__dirname, 'src/templates/page-template.js'),
      context: {
        id: page.id,
      },
    })
  })
}

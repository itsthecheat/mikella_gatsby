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
        }
      }
    }
  `)

  const pageTemplates = {
    page: path.resolve(__dirname, 'src/templates/page-template.js'),
    // Splash: path.resolve(__dirname, 'src/templates/dark.js'),
  }
  // Create pages for each Page in Prismic using the selected template.
  pages.data.allPrismicPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.uid}`,
      component: pageTemplates.page,
      context: {
        uid: node.uid,
      },
    })
  })
}

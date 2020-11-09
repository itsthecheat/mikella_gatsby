const path = require('path')
const fs = require('fs')

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
    page: path.resolve(__dirname, 'src/templates/page-template.js')
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

// exports.onPostBuild = async ({ graphql }) => {
//   await graphql(`
//   {
//     allPrismicPage {
//       edges {
//         node {
//           data {
//             body
//           }
//         }
//       }
//     }
//   }
//   `).then((result) => {
//     console.log (JSON.stringify(result))
//   })
// }
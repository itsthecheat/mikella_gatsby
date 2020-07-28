import React from 'react'
import { graphql } from 'gatsby'
import SliceZone from '../components/SliceZone'
import Layout from '../components/Layout'


const Page = ({ data }) => {
  const prismicContent = data.prismic.allPages.edges[0]
    if (!prismicContent) return null
  const document = prismicContent.node
    return (
      <Layout>
        <SliceZone sliceZone={document.body} />
      </Layout>
    )
}

export const query = graphql`
  query PageQuery($uid: String){
    prismic {
      allPages(uid: $uid) {
        edges {
        node {
          page_title
          body {
            ... on PRISMIC_PageBodyFull_width_image {
              type
              primary {
                full_width_image
              }
            }
            ... on PRISMIC_PageBodyTitle {
              type
              primary {
                title
              }
            }
            ... on PRISMIC_PageBodyText {
              type
              primary {
                text
                columns
              }
            }
            ... on PRISMIC_PageBodyImage {
              type
              primary {
                image
                imageSharp {
                    childImageSharp {
                      fluid (maxWidth: 500, maxHeight: 500){
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
              }
            }
          }
        }
      }
      }
    }
  }
`

export default Page

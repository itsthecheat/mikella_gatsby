import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'

const Page = ({ data }) => {
  const prismicContent = data.allPrismicPage.edges[0]
    if (!prismicContent) return null
  const document = prismicContent.node.data
    return (
      <Layout>
        <div dangerouslySetInnerHTML={{__html: document.page_title.html }}></div>
          <SliceZone allSlices={ document.body }/>
      </Layout>
    )
}

export const query = graphql`
  query pageQuery  {
    allPrismicPage  {
      edges {
        node {
          id
          uid
          data {
            page_title {
              html
            }
            body {
              ... on PrismicPageBodyFullWidthImage {
                id
                slice_type
                primary {
                  full_width_image {
                    alt
                    url
                    fluid {
                      base64
                    }
                  }
                }
              }
              ... on PrismicPageBodyTitle {
                id
                slice_type
                primary {
                  title {
                    html
                  }
                }
              }
              ... on PrismicPageBodyText {
                id
                slice_type
                primary {
                  columns
                  text {
                    html
                  }
                }
              }
              ... on PrismicPageBodyImage {
                id
                slice_type
                primary {
                  image {
                    alt
                    url
                    fluid {
                      base64
                    }
                  }
                }
              }
              ... on PrismicPageBodySection {
                id
                slice_type
                primary {
                  title {
                    html
                  }
                }
                items {
                  content {
                    html
                  }
                  image {
                    alt
                    url
                    fluid (maxWidth: 500){
                    ...GatsbyPrismicImageFluid
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

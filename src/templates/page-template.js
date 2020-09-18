import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SliceZone from '../components/SliceZone'
import styles from './page-template.module.css'
import Container from 'react-bootstrap/Container'
import 'typeface-dm-serif-display'

const Page = ({ data }) => {
  const prismicContent = data.allPrismicPage.edges[0]
    if (!prismicContent) return null
  const document = prismicContent.node.data
    return (

      <Layout>
        <div className={styles.pageTitle} dangerouslySetInnerHTML={{__html: document.page_title.html }}></div>
        <Container>
              <SliceZone allSlices={ document.body }/>
        </Container>

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
                    localFile {
                      childImageSharp {
                        fixed(width: 1200){
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                    alt
                    url
                    fluid {
                      base64
                    }
                  }
                }
              }
              ... on PrismicPageBodyText {
                id
                slice_type
                primary {
                  title {
                    html
                  }
                }
                items {
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
                    localFile {
                      childImageSharp {
                        fluid (quality: 100 ){
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
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
                    localFile {
                      childImageSharp {
                        fluid (quality: 100){
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image_position
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

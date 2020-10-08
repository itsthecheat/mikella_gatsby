/* eslint-disable max-len */
import React from 'react'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import { Layout, ContactForm, SliceZone } from '../components'
import styles from './page-template.module.css'

const Page = ({ data }) => {
  const prismicContent = data.prismicPage.data
  if (!prismicContent) return null
  const document = prismicContent
  return (
    <Layout>
      <div className={styles.pageTitle} dangerouslySetInnerHTML={{ __html: document.page_title.html }} />
      <Container>
        <SliceZone allSlices={document.body} />
        <ContactForm />
      </Container>
    </Layout>

  )
}

export const query = graphql`
  query pageQuery ($uid: String) {
    prismicPage (uid: { eq: $uid }) {
      uid
      url
      id
      data {
        body {
          ... on PrismicPageBodyText {
            id
            slice_type
            items {
              columns
              text {
                html
              }
            }
            primary {
              section_id
              title {
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
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                    id
                  }
                }
                url
                alt
              }
            }
          }
          ... on PrismicPageBodySection {
            id
            items {
              content {
                html
              }
              image {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              image_position
            }
            slice_type
            primary {
              section_id
              title {
                html
              }
            }
          }
          ... on PrismicPageBodySpecializations {
            id
            primary {
              specialty_title {
                html
              }
            }
            items {
              description_title {
                html
              }
              specialty_description {
                text
              }
              specialty_image {
                alt
                copyright
                url
                thumbnails
              }
            }
            slice_type
          }
        }
        page_title {
          html
        }
      }
    }
  }
`
export default Page

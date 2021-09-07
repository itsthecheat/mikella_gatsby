import * as React from 'react'
import { graphql } from 'gatsby'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import { Container } from 'react-bootstrap'
import { linkResolver } from '../utils/linkResolver'
import * as styles from './index.module.css'
import SliceZone from '../components/SliceZone'

const Splash = ({ data }) => {
  const prismicContent = data.allPrismicSplash.edges[0]
  if (!prismicContent) return null
  const document = prismicContent.node.data

  return (
    <Container fluid>
      <div className={styles.splashTitle} dangerouslySetInnerHTML={{ __html: document.title_splash.html }} />
      <div style={{ backgroundImage: `url(${document.background_splash.url})` }} className={styles.backgroundSplash} />
      <div className={styles.overlay} />
      <div className={styles.slices}>
        <SliceZone allSlices={document.body} />
      </div>
    </Container>
  )
}
export default withPrismicPreview(Splash, [
  {
    repositioryName: 'mikellamillen',
    linkResolver,
  },
])

export const query = graphql`
  {
    allPrismicSplash {
      edges {
        node {
          _previewable
          url
          data {
            body {
              ... on PrismicSplashDataBodyHeroText {
                 id
                 slice_type
                 primary {
                   hero_text {
                     text
                   }
                 }
               }
              ... on PrismicSplashDataBodyPageLink {
                id
                primary {
                  link_name {
                    text
                  }
                  page_link {
                    url
                  }
                }
                slice_type
              }
            }
            title_splash {
              html
            }
            background_splash {
              url
              alt
              fluid {
                base64
              }
            }
          }
        }
      }
    }
  }
`

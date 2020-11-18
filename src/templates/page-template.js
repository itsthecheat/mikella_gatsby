/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { animateScroll as scroll } from 'react-scroll'
import Container from 'react-bootstrap/Container'
import Fab from '@material-ui/core/Fab'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import { makeStyles } from '@material-ui/core/styles'
import {
  Layout,
  Contact,
  SliceZone,
  EventBrite,
} from '../components'
import styles from './page-template.module.css'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: 'black',
  },
}))

const Page = ({ data }) => {
  useState({ loaded: false })
  useEffect(() => {
    const script = document.createElement('script')
    const scriptMailerLite = document.createElement('script')
    const js = `(function (m, a, i, l, e, r) {
      m['MailerLiteObject'] = e; function f() {
        var c = { a: arguments, q: [] }; var r = this.push(c); return "number" != typeof r ? r : f.bind(c.q);
      }
      f.q = f.q || []; m[e] = m[e] || f.bind(f.q); m[e].q = m[e].q || f.q; r = a.createElement(i);
      var _ = a.getElementsByTagName(i)[0]; r.async = 1; r.src = l + '?v' + (~~(new Date().getTime() / 1000000));
      _.parentNode.insertBefore(r, _);
    })(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
    var ml_account = ml('accounts', '1615598', 'y6c1b2g4k1', 'load');`
    const scriptText = document.createTextNode(js)
    scriptMailerLite.appendChild(scriptText)
    document.body.appendChild(scriptMailerLite)
    script.src = 'https://square.site/appointments/buyer/widget/9844bf04-5081-4d65-805e-30f04c4c41b7/2K6GKN433C0B9.js'
    script.addEventListener('load', { loaded: true })
    if (data.prismicPage.uid === 'other-services') {
      return document.getElementById('square').appendChild(script)
    }
    return null
  }, [])

  const classes = useStyles()
  const scrollToTop = () => scroll.scrollToTop()
  const prismicContent = data.prismicPage.data
  if (!prismicContent) return null
  const page = prismicContent

  return (
    <Layout data={data}>
      <div className={styles.pageTitle} dangerouslySetInnerHTML={{ __html: page.page_title.html }} />
      <Container id="container">
        <div id="square" className={data.prismicPage.uid === 'other-services' ? styles.squareContainer : null} />
        {data.prismicPage.uid === 'events' ? <EventBrite /> : null}
        <SliceZone className={styles.slices} allSlices={page.body} />
        <Fab className={classes.fab} size="small" aria-label="add">
          <UpIcon onClick={scrollToTop} />
        </Fab>
        <Contact />
      </Container>
    </Layout>

  )
}
export default Page

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
              section_label
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
              section_label
              title {
                html
              }
            }
          }
          ... on PrismicPageBodySpecializations {
            id
            primary {
              section_id
              section_label
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

/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
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
} from '../components'
import { pageTitle, squareContainer} from './page-template.module.css'

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
    script.src = 'https://embed.acuityscheduling.com/js/embed.js'
    script.addEventListener('load', { loaded: true })
    // if (data.prismicPage.uid === 'events') {
    //   return document.getElementById('square').appendChild(script)
    // }
    // return null
  }, [])

  const classes = useStyles()
  const scrollToTop = () => scroll.scrollToTop()
  const prismicContent = data.prismicPage.data
  if (!prismicContent) return null
  const page = prismicContent

  return (
    <Layout data={data}>
      <div className={pageTitle} dangerouslySetInnerHTML={{ __html: page.page_title.html }} />
      <Container id="container">

        {data.prismicPage.uid === 'events'
          ? (

            <div id="square" className={squareContainer}>
              <iframe src="https://app.acuityscheduling.com/schedule.php?owner=21420573&calendarID=4821387" title="Schedule Appointment" width="100%" height="800" frameBorder="0" />
            </div>

          )
          : null}

        <SliceZone allSlices={page.body} />
        <Fab className={classes.fab} size="small" aria-label="add">
          <UpIcon onClick={scrollToTop} />
        </Fab>
        <Contact />
      </Container>
    </Layout>

  )
}
export default withPrismicPreview(Page)
// , [
//   {
//     repositoryName: 'mikellamillen',
//     linkResolver,
//   },
// ]
export const query = graphql`
query pageQuery($id: String) {
  prismicPage(id: {eq: $id}) {
    _previewable
    uid
    url
    id
    data {
      body {
        ... on PrismicPageDataBodyText {
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
        ... on PrismicPageDataBodyImage {
          id
          slice_type
          primary {
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                  id
                }
              }
              url
              alt
            }
          }
        }
        ... on PrismicPageDataBodySection {
          id
          items {
            content {
              html
            }
            image {
              alt
              gatsbyImageData(layout: FULL_WIDTH)
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
        ... on PrismicPageDataBodySpecializations {
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

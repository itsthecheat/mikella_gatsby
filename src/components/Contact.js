/* eslint-disable max-len */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'
// import Form from './Form'
import { formContainer, badge } from './Contact.module.css'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPage {
        uid
        url
        id
        data {
          body {
            ... on PrismicPageDataBodyTextSection {
              id
              slice_label
              primary {
                section_id
                section_label
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
          }
        }
      }
    }
  `)

  const content = data.prismicPage.data.body[6]
  return (
    <Grid
      className={formContainer}
      container
    >
      {/* <Grid item xs={12} id={content.primary.section_id} className={styles.header} dangerouslySetInnerHTML={{ __html: content.primary.title.html }} />

      <Grid item lg={6} md={6} xs={12} sm={12} className={styles.contact}>
        {content.items.map((paragraph) => (
          // eslint-disable-next-line react/no-danger
          <div dangerouslySetInnerHTML={{ __html: paragraph.text.html }} />
        ))}
      </Grid>
      <Form /> */}
      <Grid item lg={6} md={6} xs={12} sm={12}>
         <div class="ml-form-embed"
          data-account="1615598:y6c1b2g4k1"
          data-form="5738399:u0w8s9">
        </div>
      </Grid>
      
      <a className={badge} href="https://www.inclusivetherapists.com/new-york/new-york/mikella-millen" title="Find me on Inclusive Therapists" target="_blank" rel="noreferrer"><img src="https://www.inclusivetherapists.com/images/badges/12.png" border="0" /></a>
    </Grid>
  )
}

export default Contact

/* eslint-disable max-len */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Grid } from '@material-ui/core'
import Form from './Form'
import styles from './Contact.module.css'

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      prismicPageBodyTextSection {
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
  `)
  const content = data.prismicPageBodyTextSection

  return (
    <Grid
      className={styles.formContainer}
      container
    >
      <Grid item xs={12} id={content.primary.section_id} className={styles.header} dangerouslySetInnerHTML={{ __html: content.primary.title.html }} />
      <Grid item lg={6} md={6} xs={12} sm={12} className={styles.contact}>
        {content.items.map((paragraph) => (
          <div dangerouslySetInnerHTML={{ __html: paragraph.text.html }} />
        ))}
      </Grid>
      <Form />
    </Grid>
  )
}
export default Contact

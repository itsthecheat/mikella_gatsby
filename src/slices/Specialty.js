/* eslint-disable max-len */
import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import * as styles from './Specialty.module.css'

const Specialty = ({ data }) => {
  const content = data.items
  return (
    <>
      <div id={data.slice_type} className={styles.title} dangerouslySetInnerHTML={{ __html: data.primary.specialty_title.html }} />

      <Grid container className={styles.cardContainer}>
        {content.map((specialty) => (
          <Grid item md={6} spacing={4}>
            <Paper className={styles.item}>
              <div className={styles.title} dangerouslySetInnerHTML={{ __html: specialty.description_title.html }} />
              {specialty.specialty_description.text}
            </Paper>
          </Grid>

        ))}
      </Grid>
    </>
  )
}

export default Specialty

/* eslint-disable max-len */
import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import * as styles from './Specialty.module.css'

const useStyles = makeStyles({
  item: {
    background: 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(157,170,235,0.849624060150376) 60%)',
    color: 'white',
    padding: '10px',
    margin: '15px',
    '@media all and (min-width: 900px)': {
      height: '400px',
    },
    '@media all and (max-width: 480px)': {
      fontSize: '.85rem',
    },
  },
})

const Specialty = ({ data }) => {
  const content = data.items
  const classes = useStyles()

  return (
    <>
      <div id={data.slice_type} className={styles.title} dangerouslySetInnerHTML={{ __html: data.primary.specialty_title.html }} />

      <Grid container className={styles.cardContainer}>
        {content.map((specialty) => (
          <Grid item md={6} spacing={4}>
            <Paper className={classes.item}>
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

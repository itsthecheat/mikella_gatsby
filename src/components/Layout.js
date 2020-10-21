import React from 'react'
import { Grid } from '@material-ui/core'
import Menu from './Menu'
import Footer from './Footer'
import styles from './Layout.module.css'
// eslint-disable-next-line import/order

export default ({ children, data }) => (
  <>
    <Grid className={styles.container} fluid style={{ padding: 0 }}>
      <Menu data={data} />
      <div className={styles.mainContainer}>
        {children}
      </div>
      <Footer />
    </Grid>

  </>
)

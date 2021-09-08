import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Menu from './Menu'
import Footer from './Footer'
import * as styles from './Layout.module.css'
// eslint-disable-next-line import/order

const Layout = ({ children, data }) => (
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

Layout.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
}

export default Layout

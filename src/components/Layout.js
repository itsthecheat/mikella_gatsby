import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Menu from './Menu'
import NewMenu from './NewMenu'

import Footer from './Footer'
import { mainContainer } from './Layout.module.css'
// eslint-disable-next-line import/order

const Layout = ({ children, data }) => (
  <>
    <Grid fluid style={{ padding: 0 }}>
      <NewMenu data={data} />
      <div className={mainContainer}>
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

import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/global.css'
import 'typeface-dm-serif-display'
import 'typeface-raleway'
import 'typeface-assistant'
import 'typeface-fira-sans'
import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

import 'gatsby-plugin-prismic-previews/dist/styles.css'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)

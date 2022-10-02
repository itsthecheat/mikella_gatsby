import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/global.css'
import 'typeface-dm-serif-display'
import 'typeface-raleway'
import 'typeface-assistant'
import 'typeface-fira-sans'
import * as React from 'react'
import { PrismicPreviewProvider} from 'gatsby-plugin-prismic-previews'
import { repositoryConfigs } from './src/utils/prismicPreviews'
// import { PrismicProvider } from '@prismicio/react'
// import { linkResolver } from './src/utils/linkResolver'


export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
    {element}
  </PrismicPreviewProvider>
)

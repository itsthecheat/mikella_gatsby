import 'bootstrap/dist/css/bootstrap.min.css'
import './src/styles/global.css'
import 'typeface-dm-serif-display'
import 'typeface-raleway'
import 'typeface-assistant'
import 'typeface-fira-sans'
import * as React from 'react'
import { linkResolver } from './src/utils/linkResolver'
import { PrismicPreviewProvider, componentResolverFromMap, } from 'gatsby-plugin-prismic-previews'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.PRISMIC_REPO,
        linkResolver,
        componentResolver: componentResolverFromMap({
          page: PageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)

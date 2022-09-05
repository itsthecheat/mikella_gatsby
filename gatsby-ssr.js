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
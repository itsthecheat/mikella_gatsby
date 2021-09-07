import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '../utils/linkResolver'

const PreviewPage = () => (
  <div>
    <h1>Loading preview…</h1>
  </div>
)

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: 'mikellamillen',
    linkResolver,
  },
])

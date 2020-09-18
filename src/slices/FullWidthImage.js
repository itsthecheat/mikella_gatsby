import React from 'react'
import Img from 'gatsby-image'

const FullWidthImage = ({ data }) => (
  <div>
    <Img
      fixed={data.primary.full_width_image.localFile.childImageSharp.fixed}
      alt={data.primary.full_width_image.alt}
    />
  </div>

)

export default FullWidthImage

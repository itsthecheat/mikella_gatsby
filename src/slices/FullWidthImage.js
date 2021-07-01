import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const FullWidthImage = ({ data }) => (
  <div>
    <GatsbyImage
      image={data.primary.full_width_image.localFile.childImageSharp.gatsbyImageData}
      alt={data.primary.full_width_image.alt}
    />
  </div>

)

export default FullWidthImage

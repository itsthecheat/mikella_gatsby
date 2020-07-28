import React from 'react'
import Img from 'gatsby-image'

const Image = ({ slice }) => (

<div>
  {/* <div>
    <img
      src={slice.primary.image.url}
      alt={slice.primary.image.alt}
    />
  </div> */}
  <div>
    <Img fluid={slice.primary.imageSharp.childImageSharp.fluid} />
  </div>
</div>

)

export default Image

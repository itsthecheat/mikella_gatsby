import React from 'react'
import { Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Image = ({ slice }) => (
<div>
  <div>
    <RichText render={slice.primary.header} />
    <RichText render={slice.primary.text} />

  </div>
  <div>
    <img
      src={slice.primary.section_image.url}
      alt={slice.primary.section_image.alt}
    />
  </div>
</div>


)

export default Image

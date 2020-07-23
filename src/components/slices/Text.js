import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from 'gatsby-source-prismic-graphql'

const Text = ({ slice }) => {

  return (
    <div>
      <RichText
        render={slice.primary.text}
        linkResolver={linkResolver}
      />
  </div>
  )
}

export default Text

import React from 'react'
import { RichText } from 'prismic-reactjs'


const SectionHeader = ({ slice }) => {

  return (
    <div>
      <RichText
        render={slice.primary.title}
      />
  </div>
  )
}

export default SectionHeader

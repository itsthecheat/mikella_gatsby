import React from 'react'


const SectionHeader = ({ data }) => {
  return (
    <div dangerouslySetInnerHTML={{__html: data.primary.title.html}} />
  )
}

export default SectionHeader

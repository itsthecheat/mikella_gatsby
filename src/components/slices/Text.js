import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../../components/Section'

const Text = ({ slice }) => {

  const columnClass = slice.primary.columns === '2-Column'
    ? 'text-section-2col'
    : 'text-section-1col'
    console.log(slice.primary.columns)


  const paragraph = slice.primary.text;
  paragraph.map((el, index)=> {
    return el.text;
  })
  return (
    <div>

      <Section>
      <RichText render={paragraph} />
      </Section>
    </div>
  )
}

export default Text

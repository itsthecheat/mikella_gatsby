import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './HeroText.module.css'

const HeroText = ({ data }) => {
  const { text } = data.primary.hero_text
  const regex = /\b[\w']+(?:[^\w\n]+[\w']+){0,1}\b/g
  const words = text.match(regex)

  return (
    <>
      <h1 className={styles.heroText}>
        {words.map((line) => <p className={styles.word}>{line}</p>)}
      </h1>
    </>
  )
}

export default HeroText

HeroText.propTypes = {
  data: PropTypes.shape.isRequired,
  text: PropTypes.string.isRequired,
}

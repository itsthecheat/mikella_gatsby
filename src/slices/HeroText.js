import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './HeroText.module.css'

const HeroText = ({ data }) => {
  const { text } = data.primary.hero_text
  const regex = /\b[\w']+(?:[^\w\n]+[\w']+){0,2}\b/g
  const words = text.match(regex)

  return (
    <>
      <h1 className={styles.heroText}>
        <p className={styles.word}>{words[0]}</p>
        <p className={styles.word}>{words[1]}</p>
        <p className={styles.word}>{words[2]}</p>
        <p className={styles.word}>{words[3]}</p>
      </h1>
    </>
  )
}

export default HeroText

HeroText.propTypes = {
  data: PropTypes.shape.isRequired,
  text: PropTypes.string.isRequired,
}

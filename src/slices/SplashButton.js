import React from 'react'
import { Link } from 'gatsby'
import styles from './SplashButton.module.css'

const SplashButton = ({ data }) => {
const link = data.primary.page_link.url

  return (
      <Link to={link}><button className={styles.splashButton}>
      {data.primary.link_name.text}
      </button>
      </Link>
  )
}

export default SplashButton

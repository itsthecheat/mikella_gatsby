import React from 'react'
import { Link } from 'gatsby'
import * as styles from './SplashButton.module.css'

const SplashButton = ({ data }) => {
  const link = data.primary.page_link.url

  return (
    <div className={styles.btnGrp}>
      <Link to={link}>
        <button type="button" key={data.id} className={styles.splashButton}>
          {data.primary.link_name.text}
        </button>
      </Link>
    </div>

  )
}

export default SplashButton

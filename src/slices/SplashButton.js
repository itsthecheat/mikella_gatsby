import React from 'react'
import { Link } from 'gatsby'
import * as styles from './SplashButton.module.css'

const SplashButton = () => {
  // const link = data.primary.page_link.url

  return (
    <div className={styles.btnGrp}>
      {/* <Link to={link}> */}
        <button type="button" className={styles.splashButton}>
          In-person
        </button>
      {/* </Link> */}
    </div>

  )
}

export default SplashButton

import React from "react"

import styles from "./Splash.module.css"
import Container from "react-bootstrap/Container"

export default ({children}) => (
  <Container fluid style={{padding: 0}}>
<div className={styles.splash}>
<h1>splash</h1>
</div>


  </Container>

)

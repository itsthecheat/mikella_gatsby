import React from "react"
import styles from "./Layout.module.css"
import Container from 'react-bootstrap/Container'
import Menu from "../components/Menu"

export default ({ children }) => (
  <Container fluid style={{padding: 0}}>
      <Menu />
      <div className={styles.mainContainer}>
        {children}
      </div>
  </Container>

)

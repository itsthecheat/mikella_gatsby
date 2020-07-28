import React from "react"
import styles from "./section.module.css"
import {Row, Col, Container } from "react-bootstrap"


const Section =  ({children}) =>(
  <Container fluid className={styles.content}>

{children}

  </Container>
)
 export default Section

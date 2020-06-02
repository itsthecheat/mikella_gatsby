import React from "react"

import styles from "./section.module.css"
import {Row, Col, Container } from "react-bootstrap/"




export default () =>
  <Container fluid className={styles.content}>
    <section className={styles.section}>

      <Row>
        <Col lg={12}>
          <h2>Something about art therapy</h2>
        </Col>
      </Row>

      <Row>
        <Col lg={12}>
          Some Content Here
        </Col>
      </Row>
    </section>
  </Container>

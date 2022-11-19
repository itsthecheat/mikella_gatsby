import React from 'react'
import * as styles from './Image.module.css'
import { Row, Col, Container } from 'react-bootstrap'

const Image = ({ data }) => (

  <Container fluid className={styles.imageWrapper}>
    <Col lg={4} md={4} sm={12}>
      <img className={styles.image}  alt={data.primary.image.alt} src={data.primary.image.url} />
  </Col>
 </Container>
  
)

export default Image

import React from 'react'
// import styles from './Image.module.css'
import Col from 'react-bootstrap/Col'

const Image = ({ data }) => (

  <Col lg={4} md={4} sm={12}>
    <img alt={data.primary.image.alt} src={data.primary.image.url} />
  </Col>
)

export default Image

import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import * as styles from './Quote.module.css'

const Quote = ({ data }) => {
  
  return (  
    <Container fluid>
      <Row>
      <Col>
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: data.primary.quote.html }} /> 
        <hr/>
        </Col>
      </Row>
    </Container>
  )
}

export default Quote

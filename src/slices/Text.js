import React from 'react'
// import styles from "./Text.module.css"
import {Col, Row} from 'react-bootstrap'

const Text = ({ data }) => {
  
  const paragraph = data.primary.text.html;

    return (
    <div >
      <Row>
      <Col lg={8} md={8} sm={12}>
        <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
      </Col>
      </Row>
    </div>
  )
}

export default Text

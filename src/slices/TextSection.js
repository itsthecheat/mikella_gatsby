import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import * as styles from './TextSection.module.css'

const Text = ({ data }) => {
  const paragraph = data.items[0].text.html
  const title = data.primary.title.html

  return (
    <Container fluid>
      <Row id={data.primary.section_id} className={styles.header} dangerouslySetInnerHTML={{ __html: title }} />
      <Row>
        <Col className={styles.content} style={{ marginBottom: '100px' }}>
          <div dangerouslySetInnerHTML={{ __html: paragraph }} />
        </Col>
      </Row>
    </Container>
  )
}

export default Text

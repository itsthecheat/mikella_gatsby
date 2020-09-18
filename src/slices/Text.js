import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'

const Text = ({ data }) => {
  const paragraph = data.items[0].text.html
  const title = data.primary.title.html

    return (
      <Container fluid>
        <Row style={{justifyContent: 'center'}} dangerouslySetInnerHTML={{__html: title}} />
        <Row>
        <Col style={{marginBottom: '100px'}}>
          <p dangerouslySetInnerHTML={{__html: paragraph}} />
        </Col>
        </Row>
      </Container>
  )
}

export default Text

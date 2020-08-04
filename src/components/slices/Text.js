import React from 'react'
import { RichText } from 'prismic-reactjs'
import Section from '../../components/Section'
import styles from "./Text.module.css"
import {Col, Row} from 'react-bootstrap'

const Text = ({ slice }) => {

  const columnClass = slice.primary.columns === '2-Column'
    ? 'textSection2col'
    : 'textSection1col'

  const paragraph = slice.primary.text;
    paragraph.map((el, index)=> {
      return el.text;
    })

    return (
    <div className={styles[`${columnClass}`]}>
      <Section>
      <Row>
      <Col lg={8} md={8} sm={12}>
      <RichText render={paragraph} />
      </Col>
      </Row>
      </Section>
    </div>
  )
}

export default Text

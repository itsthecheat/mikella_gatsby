/* eslint-disable max-len */
import React, { useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import styles from './Section.module.css'

const Section = ({ data }) => {
  const sectionContent = data.items
  const [position] = sectionContent.map((item) => item.image_position)
  const imageClass = position === 'Left' ? styles.sectionImageLeft : styles.sectionImageRight

  return (
    <Container>
      <Row>
        <Col id={data.primary.section_id} className={styles.header} dangerouslySetInnerHTML={{ __html: data.primary.title.html }} />
      </Row>
      {sectionContent.map((section) => (

        <Row>
          <Col className={styles.content} sm={12} md={12} lg={12}>
            <Img className={imageClass} fluid={section.image.localFile.childImageSharp.fluid} alt={section.image.alt} />
            <p dangerouslySetInnerHTML={{ __html: section.content.html }} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default Section

import React from "react"
import styles from "./Section.module.css"
import {Row, Col, Container } from "react-bootstrap"
import Img from 'gatsby-image'

const Section = ({ data }) => {
const sectionContent = data.items

 return (
   <Container>
    <Row>
    <Col className={styles.header} dangerouslySetInnerHTML={{__html: data.primary.title.html}} />
    </Row>
     {sectionContent.map((section) =>
      <Row>
       <Col className={styles.content} sm={12} md={12} lg={12}>
       <Img className={styles.sectionImage} fluid={section.image.localFile.childImageSharp.fluid} alt={section.image.alt}/>
       <p className={styles.content} dangerouslySetInnerHTML={{__html: section.content.html}}/>
       </Col>
      </Row>
     )}
   </Container>
 )

}

export default Section

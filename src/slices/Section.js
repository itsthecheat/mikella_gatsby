import React from "react"
import styles from "./Section.module.css"
import {Row, Col, Container } from "react-bootstrap"
import Img from 'gatsby-image'


const Section =  ({ data }) => {
const sectionContent = data.items
const test = sectionContent.map( item => {
  return (item.image.url ? console.log(item.image) : 'null')

})


 return (
   <Container fluid className={styles.content}>
    <Row dangerouslySetInnerHTML={{__html: data.primary.title.html}} />
     {sectionContent.map((section) =>
      <Row>
       <Col>
       <img className={styles.sectionImage} src={section.image.url} alt={section.image.alt}/>
       <p dangerouslySetInnerHTML={{__html: section.content.html}}/>
       </Col>
      </Row>
     )}

   </Container>
 )

}

export default Section

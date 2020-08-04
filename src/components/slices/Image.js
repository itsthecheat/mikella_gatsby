import React from 'react'
import Img from 'gatsby-image'
import styles from './Image.module.css'
import Col from 'react-bootstrap/Col'

const Image = ({ slice }) => (

   <Col lg={4} md={4} sm={12}>
     <Img fluid={slice.primary.imageSharp.childImageSharp.fluid} />
   </Col>
)

export default Image


{/*
  <img
    src={slice.primary.image.url}
    alt={slice.primary.image.alt}
  />
*/}

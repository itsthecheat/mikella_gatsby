import React from "react"

import Container from "react-bootstrap/Container"
// import Section from "../components/Section"
import { graphql } from "gatsby"

export default ({data}) => {
const content = data.markdownRemark

  return (

    <div>

        <Container>
        <div dangerouslySetInnerHTML={{__html: content.html }}/>
        </Container>
    </div>
  )

}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      headings {
        value
      }
      html
      htmlAst
      frontmatter {
        slug
      }
    }
  }
`

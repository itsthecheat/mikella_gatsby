import React from "react"

import Container from "react-bootstrap/Container"
// import Section from "../components/Section"
import { graphql } from "gatsby"
import Menu from "../components/Menu"

export default ({data}) => {
const content = data.markdownRemark
console.log(content.htmlAst)

  return (

    <div>
      <Menu />
        <Container>
        <div dangerouslySetInnerHTML={{__html: content.html }}/>
        </Container>
    </div>
  )

}
{/*{content.headings.map((headers) => (
<div><h2>{headers.value}</h2>
<p>{content.html} </p></div>
))}*/}

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

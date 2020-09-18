import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import styles from './Menu.module.css'
import 'typeface-dm-serif-display'


export default function Menu () {
  const data = useStaticQuery(graphql`
    { site {
        siteMetadata {
          title
        }
      }
      allPrismicPage {
        edges {
          node {
            id
            uid
            data {
              body {
                ... on PrismicPageBodyFullWidthImage {
                  id
                  slice_type
                  primary {
                    full_width_image {
                      url (imgixParams: { fit: "crop", crop: "entropy" })
                      alt
                      fluid (imgixParams: { fit: "crop", crop: "edges" }) {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const image = data.allPrismicPage.edges[0].node.data.body[0].primary.full_width_image

  return (
    <>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand className={styles.brand} as= {Link} to="/">{data.site.siteMetadata.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link as={Link} to="/art-therapy/">Art Therapy</Nav.Link>
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Psychotherapy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Retreats</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Supervision</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Training</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link">Our Staff</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

<div className ={styles.heroImage} style={{ backgroundImage: `url(${image.url})` }}></div>

</>
)

}

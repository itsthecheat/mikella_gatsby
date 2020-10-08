import React from 'react'
import { PropTypes } from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import styles from './Menu.module.css'
import scrollTo from 'gatsby-plugin-smoothscroll'

export default function Menu() {
  
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
            <Nav.Link onClick={() => scrollTo('#specializations')}>Specialties</Nav.Link>
            <Nav.Link onClick={() => scrollTo('#our_staff')}>Our Staff</Nav.Link>
            <Nav.Link href="#link">Other Services</Nav.Link>
            <Nav.Link onClick={() => scrollTo('#contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <div className ={styles.heroImage} style={{ backgroundImage: `url(${image.url})` }}></div>
    </>
  )
}

Menu.propTypes = {
  data: PropTypes.object.isRequired,
}

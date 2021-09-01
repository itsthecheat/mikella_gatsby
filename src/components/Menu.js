import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'
import { HiArrowDown } from 'react-icons/hi'
import logo from '../images/mikella_logo.svg'
import * as styles from './Menu.module.css'

export default function Menu(data) {
  const props = useStaticQuery(graphql`
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
                ... on PrismicPageDataBodyFullWidthImage {
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

  const section = data.data.prismicPage.data.body
  const link_labels = section.map((item) => (item.primary ? item.primary : null)).filter((x) => x)

  const [expanded, setExpanded] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const image = props.allPrismicPage.edges[0].node.data.body[0].primary.full_width_image

  return (
    <>
      <Navbar expanded={expanded} fixed="top" className={styles.navCustom} bg="light" expand="lg">
        <img className={styles.logo} src={logo} />
        <Navbar.Brand className={styles.brand}><a style={{ color: 'black', textDecoration: 'none' }} href="/">{props.site.siteMetadata.title}</a></Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="responsive-navbar-nav"
        >
          <HiArrowDown className={styles.buttonCollapse} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className={styles.navigation}>
            {link_labels.map((link) => (
              <Nav.Link>
                <Link
                  activeClass="active"
                  to={link.section_id}
                  spy
                  smooth="easeInOutCubic"
                  offset={-100}
                  duration={1000}
                  onClick={() => setExpanded(false)}
                >
                  {link.section_label}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="page_top" className={styles.heroImage} style={{ backgroundImage: `url(${image.url})` }} />

    </>
  )
}

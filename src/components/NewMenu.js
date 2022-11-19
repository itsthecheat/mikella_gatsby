import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import { useStaticQuery, graphql, Link} from 'gatsby'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { animateScroll as scroll } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../images/mikella_logo.svg'
import { logoSize, brand, navigation, heroImage, navCustom } from './NewMenu.module.css'
import './NewMenu.module.css'


const NewMenu = () => {

  const data = useStaticQuery(graphql`
    query {
      allPrismicPage {
        nodes {
          data {
            page_title {
              text
            }
            body {
              ... on PrismicPageDataBodySection {
                id
                primary {
                  section_id
                  section_label
                  title {
                    text
                  }
                }
                slice_type
              }
              ... on PrismicPageDataBodyText {
                id
                primary {
                  section_id
                  section_label
                }
                slice_type
              }
              ... on PrismicPageDataBodySpecializations {
                id
                slice_type
                primary {
                  section_id
                  section_label
                }
              }
              ... on PrismicPageDataBodyFullWidthImage {
                id
                slice_label
                slice_type
                primary {
                  full_width_image {
                    alt
                    fluid(imgixParams: {fit: "crop", crop: "entropy"}) {
                      aspectRatio
                      base64
                      sizes
                      src
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                    url
                  }
                }
              }
            }
          }
          url
          uid 
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log(data)
  const pages = data.allPrismicPage.nodes
  const { site, allPrismicPage } = data
  const { siteMetadata } = site
  // eslint-disable-next-line camelcase
  // const link_labels = section.map((item) => (item.primary ? item.primary : null)).filter((x) => x)
  
  
  const [expanded, setExpanded] = useState(false)
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const image = allPrismicPage.nodes[1].data.body[0].primary.full_width_image
  console.log(image)

  return (
    <>
      <Navbar expanded={expanded} fixed="top" className={navCustom} bg="light" expand="lg">
        <img alt="logo" className={logoSize} src={logo} />
        <Navbar.Brand className={brand}><a style={{ color: 'black', textDecoration: 'none' }} href="/">{siteMetadata.title}</a></Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : 'expanded')}
          aria-controls="responsive-navbar-nav"
        >
          <GiHamburgerMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav id={navigation}>
            
                {pages.map((el) => (
                  el.data.page_title.text === "Groups and Trainings" || el.data.page_title.text === "About Mikella" ? null :
                    <NavDropdown
                      title={el.data.page_title.text}>                          
                        {el.data.body.map(type =>
                          type.slice_type === 'section' || type.slice_type === 'text' ?
                            <NavDropdown.Item
                              eventKey={type.id}
                            >                                                         
                              <Link                         
                                to={`${el.url}/#${type.primary.section_id}`}
                               >
                                {type.primary.section_label}
                                </Link>                                 
                            </NavDropdown.Item> : null)}    
                    </NavDropdown>               
                 
                ))}            
            <Nav.Link><Link to='/about-mikella'>About</Link> </Nav.Link>
            {/* {link_labels.map((link) => (
              <Nav.Link>
                <Link
                  activeClass="active"
                  to={link.section_id}
                  spy
                  smooth="easeInOutCubic"
                  offset={-100}
                  duration={1000}
                  onClick={() => setExpanded(false)}
                  key={link.id}
                >
                  {link.section_label}
                </Link>
              </Nav.Link>
            ))} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div id="page_top" className={heroImage} style={{ backgroundImage: `url(${image.url})` }} />

    </>
  )
}
NewMenu.propTypes = {
  data: PropTypes.object.isRequired,
}
export default NewMenu

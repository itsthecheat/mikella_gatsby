import React from "react"

import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"


export default () =>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Mikella Millen LCAT, ATR-BC</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
    <Nav>
      <Nav.Link href="#home">Art Therapy</Nav.Link>
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

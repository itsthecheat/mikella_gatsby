import React from "react"

import containerStyles from "./Layout.module.css"
import Container from 'react-bootstrap/Container'
import Menu from "../components/Menu"


export default ({ children }) => (
  <Container fluid style={{padding: 0}}>
    <Menu />
      <div className={containerStyles.container}>
        {children}
      </div>
  </Container>

)

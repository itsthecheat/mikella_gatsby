import React from "react"

import containerStyles from "./Layout.module.css"
import Container from 'react-bootstrap/Container'


export default ({ children }) => (
  <Container fluid style={{padding: 0}}>
      <div className={containerStyles.container}>
        {children}
      </div>
  </Container>

)

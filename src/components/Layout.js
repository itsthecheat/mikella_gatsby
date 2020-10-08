import React from 'react'
import Container from 'react-bootstrap/Container'
import ContactForm from './ContactForm'
import styles from './Layout.module.css'
import Menu from './Menu'
// eslint-disable-next-line import/order

export default ({ children }) => (
  <Container fluid style={{ padding: 0 }}>
    <Menu />
    <div className={styles.mainContainer}>
      {children}
    </div>
  </Container>

)

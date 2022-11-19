import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import * as styles from './Quote.module.css'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im'
const Quote = ({ data }) => {
  
  return (  
    <Container fluid  className={styles.quote}>
      <Row>
        <Col>
           <hr />
          <div className={styles.display}>
             
            <ImQuotesLeft className={styles.icons} />
            <div dangerouslySetInnerHTML={{ __html: data.primary.quote.html }} /> 
          <ImQuotesRight className={styles.icons}/>
     
          </div>
           <hr/>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Quote

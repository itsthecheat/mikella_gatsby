import React from 'react'
import { Row } from 'react-bootstrap'
import styles from './EventBrite.module.css'

const EventBrite = () => (
  <Row className="justify-content-center">
    <div className={styles.eb}>
      <iframe src="https://www.eventbrite.com/calendar-widget?eid=105804925380&showPrivate=1&sig=AGbIMNwUpS1f3WHCIqFW3Pcb8QHYDMzOzg" frameBorder="0" height="456" width="195" marginHeight="0" marginWidth="0" scrolling="no" allowtransparency="true" />
      <div>
        <a className="powered-by-eb" style={{ color: 'black', fontSize: 12 }} rel="noreferrer" target="_blank" href="http://www.eventbrite.com/">Powered by Eventbrite</a>
      </div>
    </div>
  </Row>

)
export default EventBrite

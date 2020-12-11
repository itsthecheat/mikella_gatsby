import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Row } from 'react-bootstrap'

const EventBrite = (data) => {
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
          }
        }
      }
    }
  `)

  useState({ loaded: false })
  useEffect(() => {
    const scriptAcuity = document.createElement('script')
    scriptAcuity.src = 'https://embed.acuityscheduling.com/embed/bar/21420573.js'
    scriptAcuity.addEventListener('load', { loaded: true })
    return document.getElementById('acuity').appendChild(scriptAcuity)
  }, [])
  return (
    <Row className="justify-content-center">
      <div id="acuity">
        <div className="acuity-booking-bar" style={{ display: 'none' }}>
          Mikella Millen
          <a href="https://app.acuityscheduling.com/schedule.php?owner=21420573&template=class" target="_blank" className="acuity-embed-button">Schedule Appointment</a>
        </div>
      </div>
    </Row>
  )
}
export default EventBrite

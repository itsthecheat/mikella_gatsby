import React from 'react'
import {
  TextSection, Image, Section, SplashButton, HeroText, Specialty,
} from '../slices'
import styles from './SliceZone.module.css'

const SliceZone = (props) => {
  const { allSlices } = props
  const slice = allSlices.map((s) => {
    switch (s.slice_type) {
      case 'text':
        return <TextSection key={s.id} data={s} />
      case 'image':
        return <Image key={s.id} data={s} />
      case 'section':
        return <Section key={s.id} data={s} />
      case 'specializations':
        return <Specialty key={s.id} data={s} />
      case 'page_link':
        return <SplashButton key={s.id} data={s} />
      case 'hero_text':
        return <HeroText key={s.id} data={s} />
      default:
        return null
    }
  })
  // returns array of objects of each slice
  return <div className={styles.slices}>{slice}</div>
}

export default SliceZone

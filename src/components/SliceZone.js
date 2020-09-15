import React, {Component} from 'react'
import FullWidthImage from '../slices/FullWidthImage'
import Text from '../slices/Text'
import SectionHeader from '../slices/SectionHeader'
import Image from '../slices/Image'
import Section from '../slices/Section'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    const slice = allSlices.map((s) => {
      switch (s.slice_type) {
        case 'text':
          return <Text key={s.id} data={s} />
        case 'title':
          return <SectionHeader key={s.id} data={s} />
        case 'image':
          return <Image key={s.id} data={s} />
        case 'section':
          return <Section key={s.id} data={s} />
        case 'full_width_image':
          return <FullWidthImage key={s.id} data={s} />
        default:
          return null
      }
    })
    //returns array of objects of each slice
    return <div>{slice}</div>
  }
}

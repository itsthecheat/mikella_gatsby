import React from 'react'
import FullWidthImage from './slices/FullWidthImage'
import Text from './slices/Text'
import SectionHeader from './slices/SectionHeader'
import Image from './slices/Image'

const SliceZone = ({ sliceZone }) => {
  console.log("=======SLICEZONE=======");
  console.log(sliceZone);
  const sliceComponents = {
    full_width_image: FullWidthImage,
    image: Image,
    text: Text,
    title: SectionHeader,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    console.log("=======SLICE=======")
    console.log(slice);
    const SliceComponent = sliceComponents[slice.type]
      if (SliceComponent) {
        return <SliceComponent slice={slice} key={`slice-${index}`} />
      }
      return null
  })
  console.log("=======SLICEZONE CONTENT=======")
  console.log(sliceZoneContent);
return (
  <div>
    {sliceZoneContent}
  </div>
)
}

export default SliceZone

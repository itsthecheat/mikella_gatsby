import React from 'react'

const FullWidthImage = ({ slice }) => (
  <div>
    <img
      src={slice.primary.full_width_image.url}
      alt={slice.primary.full_width_image.alt}
    />
  </div>


)

export default FullWidthImage

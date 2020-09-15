import React from 'react'

const FullWidthImage = ({ data }) => (
  <div>
    <img
      src={data.primary.full_width_image.url}
      alt={data.primary.full_width_image.alt}
    />
  </div>


)

export default FullWidthImage

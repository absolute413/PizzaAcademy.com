import React from 'react'
import Image from 'gatsby-image'

export default ({ objectFit = `cover`, objectPosition = `50% 50%`, imgStyle, ...props }) => {
  const fontFamily = `"object-fit: ${objectFit}; object-position: ${objectPosition}"`
  return <Image {...props} imgStyle={{ ...imgStyle, objectFit, objectPosition, fontFamily }} />
}

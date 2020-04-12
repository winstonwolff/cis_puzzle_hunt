import React from 'react'
import './Image.scss'

export function Image(props) {
  const otherProps = { ...props }
  otherProps.className = `Image ${props.className}`

  return (
    <img {...otherProps} />
  )
}

/* An image within some text. On desktop, it floats on right. On
   mobile, it is centered
*/
export function InlineImage(props) {
  const otherProps = { ...props }
  otherProps.className = `InlineImage ${props.className}`

  return (
    <Image {...otherProps} />
  )
}

/* An image centered on the page. Generally for headings.
*/
export function CenterImage(props) {
  const otherProps = { ...props }
  otherProps.className = `CenterImage ${props.className}`

  return (
    <Image {...otherProps} />
  )
}




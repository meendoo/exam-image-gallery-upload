// SVG by Google Inc. - https://commons.wikimedia.org/wiki/File:Ic_photo_48px.svg

import React from 'react'

export default function PhotoIcon({width, height, fill, className}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height || "48px"} width={width || "48px"} viewBox="0 0 48 48" fill={fill || "currentColor"} className={className || ""}>
        <path d="M0 0h48v48h-48z" fill="none"/>
        <path d="M42 38v-28c0-2.21-1.79-4-4-4h-28c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4zm-25-11l5 6.01 7-9.01 9 12h-28l7-9z"/>
    </svg>
  )
}

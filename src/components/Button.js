import React from 'react'
import styles from './Button.module.scss'

export default function Button(props) {
  return (
    <div role="button" className={`${styles.button} ${props.className}`} {...props}>{props.children}</div>
  )
}

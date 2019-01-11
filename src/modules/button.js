import React from 'react'
import styles from './button.module.scss'

export default function Button(props) {
  return (
    <button className={`${styles.button} ${props.className}`} {...props}>{props.children}</button>
  )
}

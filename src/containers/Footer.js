import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer>
        <p>
          <a className={styles.contact} href="mailto:contact@meendoo.com">contact@meendoo.com</a> | {new Date().getFullYear()}
        </p>
    </footer>
  )
}

import React from 'react'
import styles from './image.module.scss'

export default function Image({className, url, caption}) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      {/* <img className={`${styles.image}`} src={url} alt={caption}/> */}
      <div style={{backgroundImage: `url('${url}')`}} className={`${styles.imgDiv} ${className}`}/>
      <figcaption className={styles.figcaption}>{caption}</figcaption>
    </figure>
  )
}


// export default function Image({className, url, caption}) {
//   return (
//       // <img className={`${styles.image}`} src={url} alt={caption}/>
//       <div style={{backgroundImage: `url('${url}')`}} className={`${styles.imgDiv} ${className}`}/>
//   )
// }

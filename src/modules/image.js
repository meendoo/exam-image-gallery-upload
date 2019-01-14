import React from 'react'
import styles from './image.module.scss'

export default function Image({className, url, name, onClick}) {
  return (
    <figure className={`${styles.figure} ${className}`} onClick={onClick}>
      {/* <img className={`${styles.image}`} src={url} alt={name}/> */}
      <div style={{backgroundImage: `url('${url}')`}} className={`${styles.imgDiv} ${className}`}/>
      <figcaption className={styles.figcaption}>{name}</figcaption>
    </figure>
  )
}


// export default function Image({className, url, caption}) {
//   return (
//       // <img className={`${styles.image}`} src={url} alt={caption}/>
//       <div style={{backgroundImage: `url('${url}')`}} className={`${styles.imgDiv} ${className}`}/>
//   )
// }

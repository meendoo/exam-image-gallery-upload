import React from 'react'
import styles from './image.module.scss'

export default function Image({className, url, name, onClick}) {
	return (
		<figure className={`${styles.figure} ${className}`} onClick={onClick}>
			<div style={{backgroundImage: `url('${url}')`}} className={`${styles.imgDiv} ${className}`}/>
			{/* <figcaption className={styles.figcaption}>{name}</figcaption> */}
		</figure>
	)
}
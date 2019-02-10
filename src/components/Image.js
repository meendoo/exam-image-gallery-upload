import React from "react";
import styles from "./image.module.scss";

export default function Image({ className, url, onClick }) {
  return (
    <figure className={`${styles.figure} ${className}`} onClick={onClick}>
      <div
        style={{ backgroundImage: `url('${url}')` }}
        className={`${styles.imgDiv} ${className}`}
      />
    </figure>
  );
}

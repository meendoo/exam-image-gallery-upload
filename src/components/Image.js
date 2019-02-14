import React, { Component } from "react";
import styles from "./image.module.scss";
import CaptionInput from "./CaptionInput";

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCaptionEditable: false
    };
  }

  toggleInputCaption = (e, state) => {
    e.stopPropagation();
    this.setState({
      isCaptionEditable: state
    });
  };

  render() {
    const { imageId, updateImageCaption, className, url, caption } = this.props;
    const { isCaptionEditable } = this.state;
    return (
      <figure className={`${styles.figure} ${className}`}>
        <div
          style={{ backgroundImage: `url('${url}')` }}
          className={`${styles.imgDiv} ${className}`}
        />
        <figcaption className={styles.figcaption} onClick={e => this.toggleInputCaption(e, true)}>
          {!isCaptionEditable ? (
            <p>{String(caption).substr(0, 250)}</p>
          ) : (
            <CaptionInput
              caption={caption}
              imageId={imageId}
              hideInput={e => this.toggleInputCaption(e, false)}
              updateImageCaption={updateImageCaption}
            />
          )}
        </figcaption>
      </figure>
    );
  }
}

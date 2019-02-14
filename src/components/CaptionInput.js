import React, { Component } from "react";
import styles from "./CaptionInput.module.scss";

export default class CaptionInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caption: props.caption
    };
  }

  handleInputChange = e => {
    this.setState({
      caption: String(e.target.value)
    });
  };

  submitCaption = e => {
    e.preventDefault();
    this.props.updateImageCaption(this.props.imageId, { caption: this.state.caption });
    this.props.hideInput(e);
  };

  render() {
    return (
      <form onSubmit={this.submitCaption}>
        <input
          type="text"
          autoFocus
          className={styles.captionInput}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

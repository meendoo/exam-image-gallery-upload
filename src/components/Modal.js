import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import styles from "./modal.module.scss";
import { TweenMax } from "gsap";
import { ModalActions } from "../actions";

export class Modal extends Component {
  animateModalIn() {
    if (this.props.isModalOpen) {
      TweenMax.from("#modal", 0.3, { autoAlpha: 0 });
    }
  }

  closeOnEsc = e => {
    e.keyCode === 27 && this.props.closeModal();
  };

  componentDidUpdate = prevProps => {
    if (prevProps.isModalOpen === false && this.props.isModalOpen === true) {
      this.animateModalIn();
    }
  };

  componentDidMount = () => {
    window.addEventListener("keydown", e => this.closeOnEsc(e));
  };

  render() {
    const { children, isVisible } = this.props;

    return (
      isVisible &&
      ReactDOM.createPortal(
        <>
          <div id="modal" className={styles.modal}>
            {children}
          </div>
          <div className={styles.close} onClick={() => this.props.closeModal()}>
            &times;
          </div>
          <div className={styles.backdrop} />
        </>,
        document.body
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(ModalActions.closeModal())
});

export default connect(
  null,
  mapDispatchToProps
)(Modal);

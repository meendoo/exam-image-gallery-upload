import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "../components/Image";
import styles from "./gallery.module.scss";
import { TimelineMax } from "gsap";
import { ModalActions, GalleryActions } from "../actions";
import Spinner from "../components/Spinner";

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.imageAnimation = new TimelineMax();
  }

  animateImages = () => {
    return this.imageAnimation.staggerFromTo(
      `.${styles.image}`,
      0.2,
      { autoAlpha: 0 },
      { autoAlpha: 1 },
      0.05
    );
  };

  componentDidUpdate = prevProps => {
    if (
      prevProps.images !== this.props.images ||
      prevProps.order !== this.props.order
    ) {
      this.animateImages().play();
    }
  };

  componentDidMount = () => {
    this.props.fetchImages();
  };

  render() {
    this.imageAnimation.kill().clear();
    const { images } = this.props;
    const imgs =
      images &&
      images.length > 0 &&
      images.map((img, imgIndex) => {
        return (
          <Image
            key={img.imageId}
            url={img.url}
            className={styles.image}
            onClick={() => this.props.openImageViewerModal(images, imgIndex)}
          />
        );
      });

    return (
      <>
        {this.props.isUploading && <Spinner />}
        {images && images.length > 0 ? (
          <div className={styles.gallery}>{imgs}</div>
        ) : (
          <div className={styles.placeholderText}>
            You haven't uploaded images yet :(
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ gallery, modal }) => ({
  images: gallery.images,
  isUploading: modal.isUploading
});

const mapDispatchToProps = dispatch => ({
  fetchImages: () => dispatch(GalleryActions.fetchImages()),
  openImageViewerModal: (imageRef, currentViewIndex) =>
    dispatch(ModalActions.openImageViewerModal(imageRef, currentViewIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

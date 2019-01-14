import React, { Component } from 'react';
import { connect } from 'react-redux';
import Image from './image';
import styles from './gallery.module.scss';
import { TimelineMax } from 'gsap';
import { fetchImages } from "../store/actions/gallery.actions";
import { openImageViewerModal } from "../store/actions/modal.actions";

export class Gallery extends Component {
    constructor(props){
        super(props);
        this.imageAnimation = new TimelineMax();
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.images !== this.props.images || prevProps.order !== this.props.order) {
            this.animateImages().play();
        }
    }

    toggleOrderByTimestamp = (a, b) => {
        if (this.props.order === 'Newest') {
            return b.timestamp.seconds - a.timestamp.seconds;
        }
        if (this.props.order === "Oldest") {
            return a.timestamp.seconds - b.timestamp.seconds
        }
        return 0;
    }

    animateImages = () => {
        return this.imageAnimation.staggerFromTo(`.${styles.image}`, 0.2, {autoAlpha: 0}, {autoAlpha: 1}, 0.05);
    }

    componentDidMount = () => {
        this.props.fetchImages();
    }
    

    render() {
        this.imageAnimation.kill().clear();
        const { images } = this.props;
        const imgs = images && images.length > 0 && images
            .sort((a, b) => this.toggleOrderByTimestamp(a,b))
            .map(img => <Image className={styles.image} url={img.url} caption={img.name} key={img.id} onClick={()=>this.props.openImageViewerModal(img)} /> );

        return (
            <div className={styles.gallery}>
                {images && images.length > 0 && imgs}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    images: state.gallery.images,
    order: state.gallery.order
})

const mapDispatchToProps = (dispatch) => ({
    fetchImages: () => dispatch(fetchImages()),
    openImageViewerModal: (imageRef) => dispatch(openImageViewerModal(imageRef))
})

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

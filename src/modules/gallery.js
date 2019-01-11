import React, { Component } from 'react'
import { connect } from 'react-redux'
import Image from './image'
import styles from './gallery.module.scss'
import Button from './button'
import OrderIcon from './orderIcon'
import { TimelineMax } from 'gsap'
import { galleryActions } from "../store/actions";
import { modalActions } from '../store/actions'

export class Gallery extends Component {
    constructor(props){
        super(props);
        this.imageAnimation = new TimelineMax();
    }

    handleOrder = () => {
        const {dispatch, order} = this.props;
        order === "Newest" ? dispatch(galleryActions.orderByOldest()) : dispatch(galleryActions.orderByNewest()); 
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.dataMock !== this.props.dataMock || prevProps.order !== this.props.order) {
            this.animateImages().play();
        }
    }

    toggleOrderByTimestamp = (a, b) => {
        if (this.props.order === 'Newest') {
            return b.timestamp - a.timestamp;
        }
        if (this.props.order === "Oldest") {
            return a.timestamp - b.timestamp
        }
        return 0;
    }

    animateImages = () => {
        return this.imageAnimation.staggerFromTo(`.${styles.image}`, 0.2, {autoAlpha: 0}, {autoAlpha: 1}, 0.05);
    }

    componentDidMount = () => {
        this.animateImages().play();
    }

    openModal = () => {
        this.props.dispatch(modalActions.openModal());
    }

    render() {
        this.imageAnimation.kill().clear();
        const { order } = this.props;
        const images = this.props.images
            .sort((a, b) => this.toggleOrderByTimestamp(a,b))
            .map(img => <Image className={styles.image} url={img.url} caption={img.caption} key={img.id}  /> );

        return (
            <div>
                <div>
                    <ul className={styles.actions}>
                        <li><Button onClick={this.openModal} tabIndex="0">Add Media</Button></li>
                        <li className={styles.orderToggle} onClick={this.handleOrder}>
                            <OrderIcon width="16px" height="16px"/> <span>{order}</span>
                        </li>
                    </ul>
                </div>
                <div className={styles.gallery}>
                    {this.props.images ? images : "No pictures to show"}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({gallery}) => ({
    images: gallery.images,
    order: gallery.order
})

export default connect(mapStateToProps)(Gallery);

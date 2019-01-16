import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from './Button';
import DeleteIcon from '../icons/deleteIcon';
import OrderIcon from '../icons/orderIcon';
import styles from './nav.module.scss';
import { ModalActions, GalleryActions } from '../actions';

class Nav extends Component {
    handleOrder = () => {
        this.props.order === "Newest" ? this.props.orderByOldest() : this.props.orderByNewest(); 
    }

    render() {
        const { order, images } = this.props;
        return (
            <nav>
                <ul className={styles.actions}>
                    <li><Button onClick={()=>this.props.openUploadZoneModal()} tabIndex="0">Add Media</Button></li>
                    <ul className={styles.actionsRight}>
                        {images && images.length > 0 && (
                            <li className={styles.btnClear} onClick={()=>this.props.clearGallery(images)}>
                                <DeleteIcon width="18" height="18" fill="#fff" className={styles.clearIcon}/> <span className={styles.clearSpan}>Clear Gallery</span>
                            </li>
                        )}
                        <li className={styles.orderToggle} onClick={this.handleOrder}>
                            <OrderIcon width="16px" height="16px"/> <span>{order}</span>
                        </li>
                    </ul>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = ({gallery}) => ({
    order: gallery.order,
    images: gallery.images
})

const mapDispatchToProps = (dispatch) => ({
    openUploadZoneModal: () => dispatch(ModalActions.openUploadZoneModal()),
    orderByNewest: () => dispatch(GalleryActions.orderByNewest()),
    orderByOldest: () => dispatch(GalleryActions.orderByOldest()),
    clearGallery: (refs) => dispatch(GalleryActions.clearGallery(refs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
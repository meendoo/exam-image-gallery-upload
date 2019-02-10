import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from './Button';
import DeleteIcon from '../icons/DeleteIcon';
import OrderIcon from '../icons/OrderIcon';
import styles from './nav.module.scss';
import { ModalActions, GalleryActions } from '../actions';

export const OrderButton = ({onClick, order}) => {
    return (
        <Button className={styles.orderToggle} onClick={onClick}>
            <OrderIcon width="16px" height="16px"/> <span>{order}</span>
        </Button>
    )
}

export const DeleteButton = ({onClick}) => {
    return (
        <Button className={styles.btnClear} onClick={onClick}>
            <DeleteIcon width="18" height="18" fill="#fff" className={styles.clearIcon}/> <span className={styles.clearSpan}>Clear Gallery</span>
        </Button>
    )
}

export class Nav extends Component {

    render() {
        const { order, images } = this.props;
        return (
            <nav>
                <div className={styles.actions}>
                    <Button onClick={()=>this.props.openUploadZoneModal()} tabIndex="0">Add Media</Button>
                    <div className={styles.actionsRight}>
                        {images && images.length > 0 && (
                            <DeleteButton onClick={()=>this.props.clearGallery(images)}/>
                        )}
                        <OrderButton order={order} onClick={()=>this.props.handleOrder(order)}/>
                    </div>
                </div>
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
    handleOrder: (currentOrder) => dispatch(GalleryActions.handleOrder(currentOrder)),
    clearGallery: (refs) => dispatch(GalleryActions.clearGallery(refs))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import Button from './button';
import OrderIcon from './orderIcon';
import styles from './nav.module.scss';
import { orderByNewest, orderByOldest } from "../store/actions/gallery.actions";
import { openUploadZoneModal } from "../store/actions/modal.actions";

class Nav extends Component {
    handleOrder = () => {
        this.props.order === "Newest" ? this.props.orderByOldest() : this.props.orderByNewest(); 
    }

    render() {
        const { order } = this.props;
        return (
            <div>
                <ul className={styles.actions}>
                    <li><Button onClick={()=>this.props.openUploadZoneModal()} tabIndex="0">Add Media</Button></li>
                    <li className={styles.orderToggle} onClick={this.handleOrder}>
                        <OrderIcon width="16px" height="16px"/> <span>{order}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.gallery.order
})

const mapDispatchToProps = (dispatch) => ({
    openUploadZoneModal: () => dispatch(openUploadZoneModal()),
    orderByNewest: () => dispatch(orderByNewest()),
    orderByOldest: () => dispatch(orderByOldest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
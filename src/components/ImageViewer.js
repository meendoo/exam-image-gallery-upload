import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageActions, ModalActions } from '../actions';
import './imageViewer.scss';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipe } from 'react-photoswipe';

class ImageViewer extends Component {
	constructor(props) {
		super(props);
		this.options = {
            history: false,
            showHideOpacity: true,
			bgOpacity: 0.95,
			modal: false,
			shareEl: false
        }
	}

	componentDidUpdate = (prevProps) => {
		const { isImageViewerOpen } = this.props;
		if (prevProps.isImageViewerOpen !== isImageViewerOpen) {
			isImageViewerOpen ? document.body.classList.add('ps-open') : document.body.classList.remove('ps-open');
		}
	}

	render() {
		const { isImageViewerOpen, imageRef } = this.props;
		const items = [];
		imageRef && imageRef.length > 0 && imageRef.forEach(img => {			
			let el = new Image();
			el.src = img.url;

			const imgItem = {};
            imgItem.src = img.url;
            imgItem.alt = img.name;
            imgItem.w = el.width || 400;
			imgItem.h = el.height || 300;
			items.push(imgItem);
		});

		if (isImageViewerOpen) {
			return (
				<PhotoSwipe
					id="pswp"
					items={items}
					isOpen={isImageViewerOpen}
					onClose={()=>this.props.closeModal()}
					options={{...this.options, index: this.props.currentViewIndex}}
				/>
			)
		} else {
			return <></>
		}
	}
}

const mapStateToProps = ({modal, image}) => ({
  isImageViewerOpen: modal.isImageViewerOpen,
  imageRef: image.imageRef,
  currentViewIndex: image.currentViewIndex
})

const mapDispatchToProps = dispatch => ({
  deleteImage: (file) => dispatch(ImageActions.deleteImage(file)),
  closeModal: () => dispatch(ModalActions.closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
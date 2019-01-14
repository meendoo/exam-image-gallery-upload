import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteImage, rotateClockwise, rotateCounterClockwise } from '../store/actions/image.actions'
import styles from './imageViewer.module.scss'
import Modal from './modal'

class ImageViewer extends Component {

	render() {
		const { isImageViewerOpen, imageRef } = this.props;
		return (
			<Modal isVisible={isImageViewerOpen}>
				<div className={styles.previewDialog}>

					{imageRef && imageRef.map( (img) => 
						<div className={styles.imgWrapper} key={img.name}>
							<figure className={styles.figure}>
								<img className={styles.image} src={img.url} alt={img.name}/>
								<figcaption className={styles.figcaption}>{img.name}</figcaption>
							</figure>
							<div className={styles.buttonWrapper}>
								<button
									title="Rotate -90º (Counter-Clockwise)"
									className={styles.rotateButton}
									onClick={()=>this.props.rotateCounterClockwise(img)}>↺</button> 
								<button
									title="Delete Image"
									className={styles.rotateButton}
									onClick={()=>this.props.deleteImage(img)}>X</button> 
								<button
									title="Rotate +90º (Clockwise)"
									className={styles.rotateButton}
									onClick={()=>this.props.rotateClockwise(img)}>↻</button> 
							</div>
						</div>
					)}
				</div>
			</Modal>
		)
	}
}

const mapStateToProps = (state) => ({
  isImageViewerOpen: state.modal.isImageViewerOpen,
  imageRef: state.image.imageRef
})

const mapDispatchToProps = dispatch => ({
  deleteImage: (file) => dispatch(deleteImage(file)),
  rotateClockwise: (file) => dispatch(rotateClockwise(file)),
  rotateCounterClockwise: (file) => dispatch(rotateCounterClockwise(file))
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageViewer);
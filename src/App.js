import React, { Component } from 'react';
import styles from './App.module.scss';
import Nav from './modules/nav'
import Gallery from './modules/gallery'
import PhotoIcon from "./modules/photoIcon";
import LoadingBar from 'react-redux-loading-bar'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UploadZone from './modules/uploadZone';
import ImageViewer from './modules/imageViewer';
import { connect } from 'react-redux';

class App extends Component {
	render() {
		const {isUploadZoneOpen, isImageViewerOpen} = this.props;
		return (
			<>
				<LoadingBar/>
				<header className={styles.header}>
					<div className={styles.appTitle}>
						<PhotoIcon/> <h1>Photo Wall</h1>
					</div>
				</header>
				<main>
					<Nav />
					<Gallery />
				</main>

				{isUploadZoneOpen && <UploadZone/>}
				{isImageViewerOpen && <ImageViewer/>}

				<ToastContainer position="bottom-left" />
			</>
		);
	}
}


const mapStateToProps = (state) => ({
	isUploadZoneOpen: state.modal.isUploadZoneOpen,
	isImageViewerOpen: state.modal.isImageViewerOpen
});

export default connect(mapStateToProps)(App);

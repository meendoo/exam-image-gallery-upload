import React, { Component } from 'react';
import '../styles/fixes.scss';
import './App.scss';
import Nav from '../components/Nav'
import Header from './Header'
import Gallery from './Gallery'
import UploadZone from '../components/UploadZone';
import ImageViewer from '../components/ImageViewer';
import LoadingBar from 'react-redux-loading-bar'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from './Footer';

class App extends Component {

	render() {
		return (
			<>
				<LoadingBar style={{zIndex: 100, height: '4px'}}/>
				<Header/>
				<main>
					<Nav/>
					<Gallery/>
					<UploadZone/>
					<ImageViewer/>
				</main>
				<Footer/>
				<ToastContainer position="bottom-left"/>
			</>
		);
	}
}

export default App;

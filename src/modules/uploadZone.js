import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './uploadZone.module.scss'
import Button from "./button"
import { sendFiles } from '../store/actions/modal.actions'
import Modal from './modal'
import { TweenMax, Power2 } from 'gsap'

export class UploadZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFileHovering: false
        }
    }

    onDragOver = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({isFileHovering: true})
    }

    onDragLeave = (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.setState({isFileHovering: false});
    }

    onFileDrop = (e) => {
        e.preventDefault();
        this.setState({isFileHovering: false});
        this.props.sendFiles(e.dataTransfer.files);
    }

    onInputAddFiles = (e) => {
        this.props.sendFiles(e.target.files);
    }

    componentDidMount = () => {
        TweenMax.fromTo(`.${styles.uploadBox}`, 0.3, {y: 30, ease: Power2.easeOut}, {y: 0, position: 'relative'});
    }
    

    render() {
        const {isUploadZoneOpen} = this.props;
        return (
            <Modal isVisible={isUploadZoneOpen}>
                <div
                    className={`${styles.uploadBox} ${this.state.isFileHovering && styles.highLight}`}
                    onDragOver={this.onDragOver}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onFileDrop}
                >
                    <h1 className={styles.title}>Drop images here</h1>
                    <h2 className={styles.dashedText}>&ndash; or &ndash;</h2>
                    <label htmlFor="imageInput" className={styles.button}>
                        <Button tabIndex="0">Select files</Button>
                        <input onChange={this.onInputAddFiles} type="file" id="imageInput" accept="image/png, image/jpeg" multiple hidden></input>
                    </label>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    isUploadZoneOpen: state.modal.isUploadZoneOpen
});

const mapDispatchToProps = (dispatch) => ({
    sendFiles: (stagedFiles) => dispatch(sendFiles(stagedFiles)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UploadZone);

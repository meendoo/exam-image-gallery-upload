import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import Button from "./button";
import styles from "./mediaUploadBox.module.scss";
import { modalActions } from '../store/actions';
import { TweenMax } from 'gsap'

export class mediaUploadBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFileHovering: false
        }
        this.modal = React.createRef();
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

    onDragEnter = (e) => {
        e.stopPropagation();
    }

    onFileDrop = (e) => {
        e.preventDefault();
        this.setState({isFileHovering: false});
        this.props.dispatch(modalActions.filesDropped(e.dataTransfer.files));     
    }

    uploadQueue = (e) => {
        this.props.dispatch(modalActions.filesDropped(e.target.files));
    }

    closeModal = () => {
        this.props.dispatch(modalActions.closeModal());
        this.props.dispatch(modalActions.clearFiles());
    }

    closeOnEsc = (e) => {
        e.keyCode === 27 && this.closeModal();
    }

    componentDidMount = () => {
        window.addEventListener('keydown', (e)=>this.closeOnEsc(e));
    }

    componentDidUpdate = (prevProps, prevState) => {
      if (prevProps.isModalOpen === false && this.props.isModalOpen === true) {
        this.props.isModalOpen && TweenMax.from("#uploadBox", 0.3, {autoAlpha: 0});
        this.props.isModalOpen && TweenMax.from(`.${styles.uploadBox}`, 0.3, {y: 30});
      }
    }
    
    
    render() {
        const {isModalOpen, files} = this.props;
        return isModalOpen && 
            ReactDOM.createPortal(
                <div
                    onDragEnter={this.onDragEnter}
                    onDragOver={this.onDragOver}
                    onDragLeave={this.onDragLeave}
                    onDrop={this.onFileDrop}
                    id="uploadBox"
                    ref={this.modal}
                    >

                    <div className={styles.backdrop}></div>
                    <div className={styles.close} onClick={this.closeModal}>&times;</div>
                    <div className={`${styles.uploadBox} ${this.state.isFileHovering && styles.highLight}`}>
                        <div>
                            <h1 className={styles.title}>Drop images here</h1>
                        </div>
                        { files && files.length > 0 &&
                            Array
                                .from(files)
                                .map((file, i) => 
                                    <img src={URL.createObjectURL(file)} width="200" height="200" alt="sample" key={i}/>
                            )
                        }
                        <h2 className={styles.dashedText}>&ndash; or &ndash;</h2>
                        <label htmlFor="imageInput" className={styles.button}>
                            <Button>Select files</Button>
                            <input onChange={this.uploadQueue} type="file" id="imageInput" accept="image/png, image/jpeg" multiple hidden></input>
                        </label>
                    </div>
                </div>,
                document.body
            );
    }
}

const mapStateToProps = ({modal}) => ({
    isModalOpen: modal.isModalOpen,
    files: modal.files
})

export default connect(mapStateToProps)(mediaUploadBox)

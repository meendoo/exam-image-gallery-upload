import { MODAL } from '../constants'
import { storage, firestore } from '../services/firebase';
import { toast } from "react-toastify";
import { ImageActions } from '../actions';
import uuid from 'uuid/v4';

// Success message with template literal
const successMessage = files => `Awesome! ${files.length} image${files.length > 1 ? 's' : ''} ${files.length > 1 ? 'were' : 'was'} uploaded successfully.`

// Opens upload modal
export const openUploadZoneModal = () => {
    return { type: MODAL.OPEN_UPLOAD_ZONE };
}

// Opens PhotoSwipe image viewer
export const openImageViewerModal = (imageRef, currentViewIndex) => dispatch => { 
    dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
    dispatch(ImageActions.viewImage(imageRef, currentViewIndex));
}

// Closes any kind of modal window
export const closeModal = () => {
    return { type: MODAL.CLOSE_MODAL };
}

// Handles multiple files and uploads them to the Firebase server
export const sendFiles = (files) => async dispatch => {
    let storagePromises = [];
    dispatch(closeModal());
    dispatch({ type: MODAL.UPLOAD_REQUEST });
    
    // Loop through each file
    for (let i = 0; i < files.length; i++) {
        let toastId = null;
        
        // Stores files
        storage.ref().child(`dummybckp/${uuid()}.${files[i].type.split('/')[1]}`).put(files[i]); // for monitoring purposes
        let fbStorage = storage.ref().child(`images/${uuid()}.${files[i].type.split('/')[1]}`).put(files[i]);
        
        // Grouping promises
        storagePromises.push(fbStorage);
        
        // Handle upload progress 
        fbStorage.on('state_changed',
            snapshot => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes);
                if(toastId === null){
                    toastId = toast('Upload in Progress', {progress: progress, progressClassName: 'toastProgressBar'});
                } else {
                    toast.update(toastId, {progress: progress});
                }
            },
            err => {
                toast.error(err, {toastId: toastId});
            },
            () => {
                toast.done(toastId);

                // Grabs URL from stored image file
                fbStorage.snapshot.ref.getDownloadURL()
                    .then(imgURL => {
                        // Creates doc on DB with image data and URL from above
                        firestore.collection('images').add({
                            "url": imgURL,
                            "name": fbStorage.snapshot.metadata.name,
                            "timestamp": new Date()
                        })
                    }).catch(err => toast.error(err));
            }
        );
    };

    // After all uploads are done, dispatch success actions
    Promise.all(storagePromises)
        .then(()=> {
            dispatch({ type: MODAL.UPLOAD_SUCCESS });
            toast.done();
            toast.success(successMessage(files), {autoClose: true})
        })
        .catch(err => {
            dispatch({ type: MODAL.UPLOAD_REJECT });
            toast.error(err);
        });
}
import { MODAL } from '../constants'
import { storage, firestore } from '../services/firebase';
import { toast } from "react-toastify";
import { ImageActions } from '../actions'

const successMessage = files => `Awesome! ${files.length} image${files.length > 1 ? 's' : ''} ${files.length > 1 ? 'were' : 'was'} uploaded successfully.`

export const openUploadZoneModal = () => {
    return { type: MODAL.OPEN_UPLOAD_ZONE };
}

export const closeModal = () => {
    return { type: MODAL.CLOSE_MODAL };
}

export const openImageViewerModal = (imageRef, currentViewIndex) => dispatch => { 
    dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
    dispatch(ImageActions.viewImage(imageRef, currentViewIndex));
}

export const sendFiles = (files) => dispatch => {
    let storagePromises = [];
    dispatch(closeModal());
    dispatch({ type: MODAL.UPLOAD_REQUEST });
    for (let i = 0; i < files.length; i++) {
        let toastId = null;
        storage.ref().child(`dummybckp/${files[i].name}`).put(files[i]); // for monitoring purposes
        let fbStorage = storage.ref().child(`images/${files[i].name}`).put(files[i]);
        storagePromises.push(fbStorage);
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
            async () => {
                toast.done(toastId);
                fbStorage.snapshot.ref.getDownloadURL()
                    .then(imgURL => {
                        firestore.collection('images').add({
                            "url": imgURL,
                            "name": fbStorage.snapshot.metadata.name,
                            "timestamp": new Date(),
                            "orientation": 0
                        })
                    }).catch(err => toast.error(err));
            }
        );
    };

    Promise.all(storagePromises)
        .then(()=> {
            dispatch({ type: MODAL.UPLOAD_SUCCESS });
            toast.done();
            toast.success(successMessage(files), {autoClose: true})
        })
        .catch(err => toast.error(err));
}
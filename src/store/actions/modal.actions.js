import { MODAL } from './actions.constants'
import { storage, firestore } from '../../services/firebase';
import { toast } from "react-toastify";
import { viewImage } from './image.actions'

export const openUploadZoneModal = () => {
    return { type: MODAL.OPEN_UPLOAD_ZONE };
}

export function openImageViewerModal (imageRef) { 
    return function(dispatch) {
        dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
        dispatch(viewImage(imageRef));
    }
}

export const closeModal = () => {
    return { type: MODAL.CLOSE_MODAL };
}

// export function sendFiles(files) {
//     return async function(dispatch) {
//         for (let i = 0; i < files.length; i++) {
//             let fbStorage = await storage.ref().child(`images/${files[i].name}`).put(files[i]);
//             let downloadUrl = await fbStorage.task.snapshot.ref.getDownloadURL();
//             dispatch(closeModal());
//             firestore.collection('images').add({
//                 "url": downloadUrl,
//                 "name": fbStorage.task.snapshot.metadata.name,
//                 "timestamp": new Date(),
//                 "orientation": 0
//             })
//         };
//     };
// }

export function sendFiles(files) {
    return function(dispatch) {
        for (let i = 0; i < files.length; i++) {
            let toastId = null;
            let fbStorage = storage.ref().child(`images/${files[i].name}`).put(files[i]);
            fbStorage.on('state_changed',
                snapshot => {
                    let progress = (snapshot.bytesTransferred / snapshot.totalBytes);
                    console.log(progress);
                    
                    if(toastId === null){
                        toastId = toast('Upload in Progress', {progress: progress});
                    } else {
                      toast.update(toastId, {progress: progress});
                    }
                },
                err => {
                    console.log(err);
                    toast.error(err, {toastId: toastId});
                },
                () => {
                    fbStorage.snapshot.ref.getDownloadURL()
                        .then(imgURL => {
                            firestore.collection('images').add({
                                "url": imgURL,
                                "name": fbStorage.snapshot.metadata.name,
                                "timestamp": new Date(),
                                "orientation": 0
                            })
                        }).catch(err => toast.error(err));
                    dispatch(closeModal());
                    toast.done(toastId);
                }
            );
        };
    };
}
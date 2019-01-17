import React from 'react'
import { GALLERY } from '../constants'
import { firestore } from '../services/firebase';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify';
import { ImageActions } from '../actions'

// Connects to the 'images' collection on Firestore DB and populates images array
export const fetchImages = () => {
    return async dispatch => {
        dispatch(showLoading());
        dispatch(fetchRequest());
        try {
            await firestore.collection('images')
                .onSnapshot(snapshot => {
                    let fetchedData = {
                        images: []
                    }
                    snapshot.forEach(doc => {
                        fetchedData.images.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    dispatch(fetchSuccess(fetchedData.images))
                });
        } catch (error) {
            toast.error(error);
            dispatch(hideLoading());
        }
        dispatch(hideLoading());
    }
};

// Tells the application that image fetching has started
export const fetchRequest = () => {
    return { type: GALLERY.FETCH_REQUEST };
}

// Tells the application that image fetching has finished successfully
export const fetchSuccess = (images) => {
    return { type: GALLERY.FETCH_SUCCESS, images };
}

// Sort images by the newest on the gallery
export const orderByNewest = () => {
    return { type: GALLERY.ORDERBY_NEWEST }
};

// Sort images by the oldest on the gallery
export const orderByOldest = () => {
    return { type: GALLERY.ORDERBY_OLDEST }
};

// Template for close button on Toast for deleting all files
export const ToastCloseButton = ({ closeToast, confirmAction }) => {
    const toastStyle = {width: '48px', height: '48px', border: 'none', borderRadius: '0', background: "#b71d1d", color: "white", fontWeight: 'bold', cursor: 'pointer'};
    return (
        <button style={toastStyle} onClick={confirmAction} autoFocus>YES</button>
    )
}

// Deletes all images from DB
export const clearGallery = (refs) =>
    async dispatch => {
        // Shows confirmation window
        toast.error("Delete all images?", {
            position: 'top-right',
            closeButton: <ToastCloseButton confirmAction={confirmDelete}/>
        });
        // Deletions are done file by file (Firebase doesn't allow deleting the whole structure)
        function confirmDelete() {
            refs.forEach(ref => {                
                dispatch(ImageActions.deleteImage(ref))
            });
        } 
        return { type: GALLERY.CLEAR_GALLERY }
}
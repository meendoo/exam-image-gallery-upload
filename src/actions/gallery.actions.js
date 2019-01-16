import React from 'react'
import { GALLERY } from '../constants'
import { firestore } from '../services/firebase';
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { toast } from 'react-toastify';
import { ImageActions } from '../actions'

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

export const fetchRequest = () => {
    return { type: GALLERY.FETCH_REQUEST };
}

export const fetchSuccess = (images) => {
    return { type: GALLERY.FETCH_SUCCESS, images };
}

export const orderByNewest = () => {
    return { type: GALLERY.ORDERBY_NEWEST }
};

export const orderByOldest = () => {
    return { type: GALLERY.ORDERBY_OLDEST }
};

export const ToastCloseButton = ({ closeToast, confirmAction }) => {
    const toastStyle = {width: '48px', height: '48px', border: 'none', borderRadius: '0', background: "#b71d1d", color: "white", fontWeight: 'bold', cursor: 'pointer'};
    return (
        <button style={toastStyle} onClick={confirmAction} autoFocus>YES</button>
    )
}

export const clearGallery = (refs) =>
    async dispatch => {
        toast.error("Delete all images?", {
            position: 'top-right',
            closeButton: <ToastCloseButton confirmAction={confirmDelete}/>
        });
        function confirmDelete() {
            refs.forEach(ref => {                
                dispatch(ImageActions.deleteImage(ref))
            });
        } 
        return { type: GALLERY.CLEAR_GALLERY }
}
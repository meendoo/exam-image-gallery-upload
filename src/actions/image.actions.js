import { IMAGE } from '../constants'
import { firestore, storage } from '../services/firebase';

// Feed images to PhotoSwipe viewer and provides index from image clicked
export const viewImage = (imageRef, currentViewIndex) => {
    return { type: IMAGE.VIEW_IMAGE, payload: {imageRef, currentViewIndex} }
}

// Deletes a single image from the DB
export const deleteImage = (imageRef) => async dispatch => {
    try {
        firestore.collection('images').doc(imageRef.id).delete();
        storage.ref().child(`images/${imageRef.name}`).delete();
    } catch (error) {
        console.log(error);
    }
    dispatch({ type: IMAGE.DELETE });
}
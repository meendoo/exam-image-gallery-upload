import { IMAGE } from '../constants'
import { firestore, storage } from '../services/firebase';

export const viewImage = (imageRef, currentViewIndex) => {
    return { type: IMAGE.VIEW_IMAGE, payload: {imageRef, currentViewIndex} }
}

export const deleteImage = (imageRef) => async dispatch => {
    try {
        firestore.collection('images').doc(imageRef.id).delete();
        storage.ref().child(`images/${imageRef.name}`).delete();
    } catch (error) {
        console.log(error);
    }
    dispatch({ type: IMAGE.DELETE });
}
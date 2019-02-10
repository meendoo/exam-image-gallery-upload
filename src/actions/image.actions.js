import { IMAGE } from '../constants'
import api from '../services/api';

// Feed images to PhotoSwipe viewer and provides index from image clicked
export const viewImage = (imageRef, currentViewIndex) => {
    return { type: IMAGE.VIEW_IMAGE, payload: {imageRef, currentViewIndex} }
}

// Deletes a single image from the DB
export const deleteImage = (image) => async dispatch => {   
    return api.delete(`/image/${image.imageId}`).then(()=> {
        dispatch({ type: IMAGE.DELETE });
    })
}
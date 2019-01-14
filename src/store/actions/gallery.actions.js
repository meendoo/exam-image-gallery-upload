import { GALLERY } from './actions.constants'
import { firestore } from '../../services/firebase';
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const fetchImages = () => {
    return async dispatch => {
        dispatch({ type: GALLERY.FETCHING_IMAGES });
        dispatch(showLoading());
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
                dispatch({
                    type: GALLERY.FETCHING_IMAGES_SUCCESS,
                    ...fetchedData
                })
                dispatch(hideLoading());
            });
    }
};

export const orderByNewest = () => {
    return { type: GALLERY.ORDERBY_NEWEST }
};

export const orderByOldest = () => {
    return { type: GALLERY.ORDERBY_OLDEST }
};
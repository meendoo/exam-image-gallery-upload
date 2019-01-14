import { IMAGE } from './actions.constants'
// import { firestore } from '../../services/firebase';

// export const fetchImages = () => async dispatch => {
    
//     await firestore.collection('images')
//         .onSnapshot(snapshot => {
//             let fetchedData = {
//                 images: []
//             }

//             snapshot.forEach(doc => {
//                 fetchedData.images.push({
//                     id: doc.id,
//                     ...doc.data(),
//                 });
//             });
//             dispatch({
//                 type: IMAGE.FETCHING_IMAGES_SUCCESS,
//                 ...fetchedData
//             })
//             dispatch(hideLoading());
//         });
// };

export const viewImage = (imageRef) => {
    return { type: IMAGE.VIEW_IMAGE, imageRef}
}

export const rotateClockwise = (imageRef) => {
    return { type: IMAGE.ROTATE_CLOCKWISE, imageRef}
}

export const rotateCounterClockwise = (imageRef) => {
    return { type: IMAGE.ROTATE_COUNTER_CLOCKWISE, imageRef}
}

export const deleteImage = (imageRef) => {
    // let fbStorage = storage.ref().child('images/desert.jpg')    
}
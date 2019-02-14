import React from "react";
import { GALLERY, IMAGE } from "../constants";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { toast } from "react-toastify";
import { ImageActions } from "../actions";
import { getImages, updateCaption } from "../services/requests";

// Connects to the 'images' collection on Firestore DB and populates images array
export const fetchImages = () => {
  return async dispatch => {
    dispatch(showLoading());
    dispatch(fetchRequest());
    try {
      const images = await getImages();
      dispatch(fetchSuccess(images.data));
    } catch (error) {
      toast.error(error);
      dispatch(hideLoading());
    }
    dispatch(hideLoading());
  };
};

// Tells the application that image fetching has started
export const fetchRequest = () => {
  return { type: GALLERY.FETCH_REQUEST };
};

// Tells the application that image fetching has finished successfully
export const fetchSuccess = images => {
  return { type: GALLERY.FETCH_SUCCESS, images };
};

export const handleOrder = currentOrder => {
  return dispatch => {
    currentOrder === "Newest" ? dispatch(orderByOldest()) : dispatch(orderByNewest());
  };
};

export const updateImageCaption = (imageId, data) => {
  return async dispatch => {
    const newCaption = await updateCaption(imageId, data);
    dispatch({ type: GALLERY.UPDATE_CAPTION, image: newCaption });
  };
};

// Sort images by the newest on the gallery
export const orderByNewest = () => {
  return { type: GALLERY.ORDERBY_NEWEST };
};

// Sort images by the oldest on the gallery
export const orderByOldest = () => {
  return { type: GALLERY.ORDERBY_OLDEST };
};

// Template for close button on Toast for deleting all files
export const ToastCloseButton = ({ closeToast, confirmAction }) => {
  const toastStyle = {
    width: "48px",
    height: "48px",
    border: "none",
    borderRadius: "0",
    background: "#b71d1d",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  };
  return (
    <button style={toastStyle} onClick={confirmAction} autoFocus>
      YES
    </button>
  );
};

// Deletes all images from DB
export const clearGallery = refs => async dispatch => {
  const confirmDelete = () => {
    let deletePromises = [];
    refs.forEach(ref => {
      deletePromises.push(
        dispatch(ImageActions.deleteImage(ref))
          .then(res => res)
          .catch(err => console.log(err))
      );
    });
    Promise.all(deletePromises).then(() => dispatch(fetchImages()));
  };
  // Shows confirmation window
  toast.error("Delete all images?", {
    position: "top-right",
    closeButton: <ToastCloseButton confirmAction={() => confirmDelete()} />
  });
  return { type: GALLERY.CLEAR_GALLERY };
};

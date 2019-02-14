import { IMAGE } from "../constants";
import { removeImage } from "../services/requests";

// Feed images to PhotoSwipe viewer and provides index from image clicked
export const viewImage = (imageRef, currentViewIndex) => {
  return { type: IMAGE.VIEW_IMAGE, payload: { imageRef, currentViewIndex } };
};

// Deletes a single image from the DB
export const deleteImage = image => dispatch => {
  dispatch({ type: IMAGE.DELETE });
  return removeImage(image.imageId);
};

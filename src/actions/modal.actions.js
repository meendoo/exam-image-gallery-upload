import { MODAL } from "../constants";
import { toast } from "react-toastify";
import { ImageActions, GalleryActions } from "../actions";
import api from "../services/api";

// Success message with template literal
const successMessage = files =>
  `Awesome! ${files.length} image${files.length > 1 ? "s" : ""} ${
    files.length > 1 ? "were" : "was"
  } uploaded successfully.`;

// Opens upload modal
export const openUploadZoneModal = () => {
  return { type: MODAL.OPEN_UPLOAD_ZONE };
};

// Opens PhotoSwipe image viewer
export const openImageViewerModal = (
  imageRef,
  currentViewIndex
) => dispatch => {
  dispatch({ type: MODAL.OPEN_IMAGE_VIEWER });
  dispatch(ImageActions.viewImage(imageRef, currentViewIndex));
};

// Closes any kind of modal window
export const closeModal = () => {
  return { type: MODAL.CLOSE_MODAL };
};

// Handles multiple files and uploads them to the Firebase server
export const sendFiles = files => async dispatch => {
  let storagePromises = [];
  dispatch(closeModal());
  dispatch({ type: MODAL.UPLOAD_REQUEST });

  // Loop through each file
  for (let i = 0; i < files.length; i++) {
    let toastId = null;

    // Creates FormData object containing file to be passed down on post body
    const fileData = new FormData();
    fileData.append("image", files[i], files[i].name);

    // Send files
    let postFile = api
      .post("image", fileData, {
        onUploadProgress: e => {
          let progress = e.loaded / e.total;
          if (e.loaded / e.total === 1) {
            toast.done(toastId);
            return;
          }
          if (toastId === null) {
            toastId = toast("Upload in Progress", {
              progress: progress,
              progressClassName: "toastProgressBar"
            });
          } else {
            toast.update(toastId, { progress: progress });
          }
        }
      })
      .catch(err => toast.error(err, { toastId: toastId }));

    // Grouping promises
    storagePromises.push(postFile);
  }

  // After all uploads are done, dispatch success actions
  Promise.all(storagePromises)
    .then(() => {
      dispatch({ type: MODAL.UPLOAD_SUCCESS });
      toast.success(successMessage(files), { autoClose: true });
      dispatch(GalleryActions.fetchImages());
    })
    .catch(err => {
      dispatch({ type: MODAL.UPLOAD_REJECT });
      toast.error(err);
    });
};

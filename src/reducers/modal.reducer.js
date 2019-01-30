import { MODAL } from "../constants";

export const initialState = {
    "isUploadZoneOpen": false,
    "isImageViewerOpen": false,
    "isUploading": false
};

export function modal(state = initialState, action) {
    switch (action.type) {
      case MODAL.OPEN_UPLOAD_ZONE:
        return {
          ...state,
          isUploadZoneOpen: true
        }

      case MODAL.OPEN_IMAGE_VIEWER:
        return {
          ...state,
          isImageViewerOpen: true
        }

      case MODAL.UPLOAD_REQUEST:
        return {
          ...state,
          isUploading: true
        }

      case MODAL.UPLOAD_SUCCESS:
      case MODAL.UPLOAD_REJECT:
        return {
          ...state,
          isUploading: false
        }

      case MODAL.CLOSE_MODAL:
        return {
          ...state,
          isImageViewerOpen: false,
          isUploadZoneOpen: false
        }
        
      default:
        return state
  }
}
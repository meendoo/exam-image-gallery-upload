import { MODAL } from "../actions/actions.constants";
// import sharp from 'sharp'

const initialState = {
    "isUploadZoneOpen": false,
    "isImageViewerOpen": false
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

      case MODAL.CLOSE_MODAL:
        return {
          ...state,
          isImageViewerOpen: false,
          isUploadZoneOpen: false
        }

      case MODAL.ROTATE_COUNTER_CLOCKWISE:
        return {
          ...state,
          stagedFiles: [
            ...state.stagedFiles
          ]
        }

      default:
        return state
  }
}
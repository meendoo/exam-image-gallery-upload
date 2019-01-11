import initialState from "../../constants/data.json";

import { MODAL } from "../actions/actions.constants";

export function modal(state = initialState.modal, action) {
    switch (action.type) {
      case MODAL.OPEN:
        return {
          ...state,
          isModalOpen: true
        }
      case MODAL.CLOSE:
        return {
          ...state,
          isModalOpen: false 
        }
      case MODAL.FILES_DROPPED:
        return {
          ...state,
          files: action.files
        }
      case MODAL.CLEAR_FILES:
        return {
          ...state,
          files: {}
        }
      default:
        return state
  }
}
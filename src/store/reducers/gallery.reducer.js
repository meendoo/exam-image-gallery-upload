import initialState from "../../constants/data.json";

import { GALLERY } from "../actions/actions.constants";

export function gallery(state = initialState.gallery, action) {
    switch (action.type) {
      case GALLERY.ORDERBY_NEWEST:
        return {
          ...state,
          order: 'Newest'
        };
      case GALLERY.ORDERBY_OLDEST:
        return {
          ...state,
          order: 'Oldest'
        };
      default:
        return state
  }
}
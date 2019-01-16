import { GALLERY } from "../constants";

const initialState = {
  order: "Newest"
}

export function gallery(state = initialState, action) {
    switch (action.type) {
      case GALLERY.FETCH_REQUEST:
        return {
          ...state,
          isFetching: true,
        }
      case GALLERY.FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          images: [
            ...action.images
          ]
        }
      case GALLERY.ORDERBY_NEWEST:
        return {
          ...state,
          order: 'Newest'
        }
      case GALLERY.ORDERBY_OLDEST:
        return {
          ...state,
          order: 'Oldest'
        }
      case GALLERY.CLEAR_GALLERY:
        return {
          ...state,
          isFetching: false,
          images: []
        }
      default:
        return state
  }
}
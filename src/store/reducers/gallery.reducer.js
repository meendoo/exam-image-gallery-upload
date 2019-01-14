import { GALLERY } from "../actions/actions.constants";

const initialState = {
  order: "Newest"
}

export function gallery(state = initialState, action) {
    switch (action.type) {
      case GALLERY.FETCHING_IMAGES:
        return {
          ...state,
          isFetching: true,
        }
      case GALLERY.FETCHING_IMAGES_SUCCESS:
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
      default:
        return state
  }
}
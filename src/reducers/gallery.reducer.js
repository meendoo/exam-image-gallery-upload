import { GALLERY } from "../constants";
import { toggleSortOrderByTimestamp } from '../utils'

export const initialState = {
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
          images: toggleSortOrderByTimestamp([...action.images], state.order)
        }
      case GALLERY.ORDERBY_NEWEST:
        return {
          ...state,
          images: toggleSortOrderByTimestamp([...state.images], 'Newest'),
          order: 'Newest'
        }
      case GALLERY.ORDERBY_OLDEST:
        return {
          ...state,
          images: toggleSortOrderByTimestamp([...state.images], 'Oldest'),
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
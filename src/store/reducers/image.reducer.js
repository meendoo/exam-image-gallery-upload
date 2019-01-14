import { IMAGE } from "../actions/actions.constants";
// import sharp from 'sharp'

const initialState = {
    "imageRef": {}
};

export function image(state = initialState, action) {
    switch (action.type) {
        case IMAGE.VIEW_IMAGE: {
            return {
                ...state,
                imageRef: [action.imageRef]
            }
        }
      default:
        return state
  }
}
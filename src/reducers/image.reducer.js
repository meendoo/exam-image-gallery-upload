import { IMAGE } from "../constants";

const initialState = {
    "imageRef": {}
};

export function image(state = initialState, action) {
    switch (action.type) {
        case IMAGE.VIEW_IMAGE: {
            const {imageRef, currentViewIndex} = action.payload;
            return {
                ...state,
                imageRef,
                currentViewIndex
            }
        }
      default:
        return state
  }
}
import { combineReducers } from "redux";
import { gallery } from './gallery.reducer'
import { modal } from './modal.reducer'

const rootReducer = combineReducers({
    gallery,
    modal
})
  
export default rootReducer;
import { combineReducers } from "redux";
import { gallery } from './gallery.reducer'
import { modal } from './modal.reducer';
import { image } from './image.reducer';
import { loadingBarReducer } from 'react-redux-loading-bar';


const rootReducer = combineReducers({
    gallery,
    modal,
    image,
    loadingBar: loadingBarReducer
})
  
export default rootReducer;
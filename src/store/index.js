import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const composeEnhancers = 
    typeof window === 'object' && (
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose
    );

const middleWares = [thunk, loadingBarMiddleware()];

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(...middleWares)
    )
);
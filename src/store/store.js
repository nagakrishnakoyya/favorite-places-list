import {createStore, compose} from 'redux';
import {favoriteReducer} from './Favorite.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export const store = createStore(favoriteReducer, composeEnhancers());
import {createStore} from 'redux';
import {favoriteReducer} from './Favorite.reducer';

export const store = createStore(favoriteReducer);
import * as actionTypes from './Favorite.action';

const initialState = {
  myFavorities:[],
}
export const favoriteReducer=(state=initialState, action)=>{
  switch(action.type){
    case actionTypes.LISTOFFAVORITES:
      return {
        ...state,
        myFavorities:action.favorities
      }
      default:
        return state;
  }
}
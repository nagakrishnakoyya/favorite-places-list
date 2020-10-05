export const LISTOFFAVORITES = 'LISTOFFAVORITES';

export const myFavoritePlaces = (favorities) => {
  return {
    type: LISTOFFAVORITES,
    favorities
  }
}


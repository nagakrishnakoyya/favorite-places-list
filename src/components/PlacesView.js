import React, { useState, useEffect } from 'react';
import { placesBaseUrl } from '../contants.config';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { myFavoritePlaces } from '../store/Favorite.action'


const PlacesView = (props) => {
  const [places, setPlaces] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {

    getPlacesData();
  }, []);

  const getPlacesData = () => {
    const apiEndpoint = "places";
    fetch(`${placesBaseUrl}/${apiEndpoint}`)
      .then(res => res.json())
      .then(data => {
        props.selectedFavList.forEach(favObj => {
          let findObj = data.places.find(obj => obj.id === favObj.id);
          if (findObj) {
            findObj.isFavorite = true;
          }
        });
        setPlaces(data.places);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const favoriteHandler = (id) => {
    const myPlaces = [...places];
    let myFavArr = [...favoriteItems];
    const itemIndex = myPlaces.findIndex(item => item.id === id);
    if (myPlaces[itemIndex].isFavorite) {
      myPlaces[itemIndex].isFavorite = false;
      const favoriteItemIndex = myFavArr.findIndex(obj => obj.id === id);
      myFavArr.splice(favoriteItemIndex, 1);
    } else {
      myPlaces[itemIndex].isFavorite = true;
      myFavArr.push(myPlaces[itemIndex]);
    }
    setFavoriteItems([...myFavArr]);
    setPlaces(myPlaces);
    props.myFavList(myFavArr);
  }

  return (
    <div className="container-fluid">
      <div className="title text-center">
        <h1>List of Places</h1>
      </div>
      <div className="row">

        {
          places.length > 0 ? (
            places.map(p => {
              return (
                <div className="col-lg-4" key={p.id}>
                  <div className="card mb-30">
                    <div className="card-body">
                      <h4 className="card-title">{p.name}{p.id}</h4>
                      <p className="card-text">
                        {p.official_description &&
                          (p.official_description).charAt(0).toUpperCase()
                          + (p.official_description).slice(1, 120)}...</p>
                      <Link to={{ pathname: `/placeDetails/${p.id}`, state: p.id }} className="card-link btn btn-sm btn-info">View More</Link>
                      <p className="favorite float-right" onClick={() => favoriteHandler(p.id)}><i className={p.isFavorite ? "fas fa-heart new-color" : "fas fa-heart old-color"}></i></p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
              <Loader loaderText="Loading places" />
            )

        }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    selectedFavList: state.myFavorities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myFavList: (favoriteItems) => { dispatch(myFavoritePlaces(favoriteItems)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesView);
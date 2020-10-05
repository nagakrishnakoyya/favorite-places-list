import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader';

const FavoritePlaces = (props) => {
  const {myFavorities} = props;
  return (
    <div className="container-fluid">
      <div className="title text-center">
        <h1>List of Favorities</h1>
      </div>
      <div className="row">

        {
          myFavorities.length > 0 ? (
            myFavorities.map(p => {
              return (
                <div className="col-lg-4" key={p.id}>
                  <div className="card mb-30">
                    <div className="card-body">
                      <h4 className="card-title">{p.name}</h4>
                      <p className="card-text">
                        {p.official_description &&
                          (p.official_description).charAt(0).toUpperCase()
                          + (p.official_description).slice(1, 120)}...</p>
                      <p>{p.location}</p>
                        <p>{p.pincode}</p>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (myFavorities.length===0?(
            <p>No data found</p>
          ):(<Loader loaderText="Loading myFavorities" />) )

        }
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    myFavorities : state.myFavorities,
  }
}

export default connect(mapStateToProps, null)(FavoritePlaces);
import React, { useState, useEffect } from 'react';
import { placesBaseUrl } from '../contants.config';
import Loader from './Loader';

const PlaceDetails = (props) => {
  const placeId = props.location.state;
  const goBack = props.history.goBack;

  const [placeDetails, setPlaceDetails] = useState({});
  const [loadData, setLoadData] = useState(true);

  useEffect(() => {
    const getPlaceDetails = () => {
      setLoadData(true);
      const apiEndpoint = "place";
      fetch(`${placesBaseUrl}/${apiEndpoint}/${placeId}`)
        .then(res => res.json())
        .then(data => {
          setPlaceDetails(data[0]);
          setLoadData(false);
        })
        .catch(error => {
          setLoadData(false);
          console.log(error);
        })
    }

    getPlaceDetails();
    return () => {
      getPlaceDetails();
    }
  }, [placeId]);



  return (
    <div className="container">
      <div className="title">
        <h1>Place Details </h1>
        <button className="btn btn-info btn-sm float-right" onClick={goBack}>Go back</button>
      </div>
      {
        loadData ? (
          <Loader loaderText="Loading place details" />
        ) : (
            <div className="row">
              <div className="col-lg-6">
                <img className="img-fluid img-thumbnail" src={placeDetails.cover} alt={placeDetails.name} />
              </div>
              <div className="col-lg-6">
                <ul className="place_details">
                  <li><b>Name :</b> {placeDetails.name}</li>
                  <li><b>Location :</b> {placeDetails.location}</li>
                  <li><b>Latitude :</b> {placeDetails.latitude}</li>
                  <li><b>Longitude :</b> {placeDetails.longitude}</li>
                  <li><b>Pincode :</b> {placeDetails.pincode}</li>
                  <li><b>Description :</b> {placeDetails.official_description}</li>
                </ul>
              </div>
            </div>)
      }

    </div>
  )
}
export default PlaceDetails;
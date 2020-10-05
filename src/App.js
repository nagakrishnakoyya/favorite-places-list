import React from "react";
import "./App.css";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import PlacesView from './components/PlacesView';
import PlaceDetails from './components/PlaceDetails';
import FavoritePlaces from './components/FavoritePlaces';
import {store} from './store/store';
import {Provider} from 'react-redux';

const App=()=> {
  return (
    <Provider store={store}>
    <div className="container-fluid p-0">
    <BrowserRouter>
    <header>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      
      <Link className="navbar-brand" to="/">Navbar</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/">Places</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorities">Favorities</Link>
          </li>
          
        </ul>
      </div>
    </nav>
    </header>
    
      <Switch>
          <Route path="/" exact component={PlacesView}/>
          <Route path="/placeDetails/:place_id" exact component={PlaceDetails}/>
          <Route path="/favorities" exact component={FavoritePlaces}/>
      </Switch>
    </BrowserRouter>
    </div>
    </Provider>
  );
}
export default App;

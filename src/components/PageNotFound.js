import React from 'react';
import {Link} from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="pageNotFound">
      <div>
        <h1>Page not found</h1>
        <p>Click here to go to <Link to="/">Home</Link></p>
      </div>
    </div>
  )
}

export default PageNotFound

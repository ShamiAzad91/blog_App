import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center">
          <h2 className="display-4">404 - Page Not Found</h2>
          <p className="lead">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

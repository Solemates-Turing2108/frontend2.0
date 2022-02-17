import React from 'react';
import './Error.css';

const Error = () => {
    console.log('error')
  return (
    <div className="error_message">
         <h1>404 Page Not Found</h1>
         <p>Please click on Home in Navbar below to return to main!</p>   
    </div>
  );
}

export default Error;

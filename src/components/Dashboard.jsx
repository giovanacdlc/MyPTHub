import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h1>Welcome to MyPTHub!</h1>
      <Link to="/Register">
        <button className="btn"> Register</button>
      </Link>
      <Link to="/Login">
        <button className="btn">Sign in</button>
      </Link>
    </div>
  );
}

export default Dashboard;

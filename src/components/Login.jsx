import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the data
    const data = {
      username: username,
      password: password,
    };

    try {
      // Make the POST request
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      // Check if the request was successful
      if (response.ok) {
        // Request succeeded, do something with the response
        console.log('Data sent successfully!');
      } else {
        // Request failed, handle the error
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Please Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input className="form-control"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input className="form-control"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <Link to = "/PT/Welcome">
          <button type="submit" className='btn'>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default Login

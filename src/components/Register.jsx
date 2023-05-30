import React from 'react';
import { useState, useEffect } from 'react';

function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     username: '',
//     password: '',
//   });
  const [formData, setFormData] = useState();


  const { name, username, password } = formData;
//   const onChange = (e) => {
//     setFormData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };
  const userObject = {
    name: name,
    username: username,
    password: password
  }

  const onSubmit = (e) => {
    //when the user info is submitted, it should trigger a fetch post request to the backend
    // e.preventDefault();
    async function createUser() {
      try {
        const response = await fetch('api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userObject),
        });
        const data = await response.json();
        console.log(data);
        setFormData(data);
      } catch (err) {
        console.log(err);
      }
    }
    createUser();
  };

  return (
    <div className="container">
      <h1>Please create an account</h1>

      <section>
        <form>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
          <input
            className="form-control"
            type="text"
            id="username"
            name="username"
            value={username}
            placeholder="Username"
            onChange={onChange}
          />
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          />
        </form>
        <button type="submit" className="btn" onClick={() => onSubmit()}>
          Submit
        </button>
      </section>
    </div>
  );
}

export default Register;

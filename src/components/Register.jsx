import React from 'react';
import { useState, useEffect } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with the data
    const data = {
      name: name,
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
      <h1>Please create an account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input className="form-control"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
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
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  );
}

//   return (
//     <div className="container">
//       <h1>Please create an account</h1>

//       <section>
//         <form>
//           <input
//             className="form-control"
//             type="text"
//             id="name"
//             name="name"
//             value={name}
//             placeholder="Enter your name"
//             onChange={onChange}
//           />
//           <input
//             className="form-control"
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             placeholder="Username"
//             onChange={onChange}
//           />
//           <input
//             className="form-control"
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             placeholder="Password"
//             onChange={onChange}
//           />
//         </form>
//         <button type="submit" className="btn" onClick={() => onSubmit()}>
//           Submit
//         </button>
//       </section>
//     </div>
//   );
// }

export default Register;

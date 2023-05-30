// import React, { Component } from 'react';
// import { render } from 'react-dom';

// class Register extends Component {
//     constructor(props) {
//         super (props);
//         this.state = {
//             name: '', 
//             username: '', 
//             password: ''
//         }
//     }
// }

// export default Register

import React from 'react'
import { useState, useEffect } from 'react'

const Register =() => {
    const [formData, setFormData] = useState({
        name: '', 
        username: '', 
        password: ''
    })
    const {name, username, password} = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='container'>
            <h1>Please create an account</h1>

            <section>
                <form>
                    <input className='form-control'
                        type="text" 
                        id='name' 
                        name='name' 
                        value={name}
                        placeholder='Enter your name'
                        onChange={onChange}
                    />
                    <input className='form-control'
                        type="text" 
                        id='username' 
                        name='username' 
                        value={username}
                        placeholder='Username'
                        onChange={onChange}
                    />
                    <input className='form-control'
                        type="password" 
                        id='password' 
                        name='password' 
                        value={password}
                        placeholder='Password'
                        onChange={onChange}
                    />
                </form>
                <button type='submit' className='btn'>Submit</button>
            </section>
        </div>

    )
}

export default Register
import React from 'react'
import { Link } from 'react-router-dom'

function PTMainPage () {
  return (
    <div className='container'>
      <h1>Welcome PT!</h1>
        <Link to= "/PT/Register">
          <button className='btn'> Register</button>
        </Link>
        <Link to= "/PT/Login">
          <button className='btn'>Sign In</button>
        </Link>
    </div>
  )
}

export default PTMainPage
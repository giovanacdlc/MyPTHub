import React from 'react'
import { Link } from 'react-router-dom'

function MainPage () {
  return (
    <div className='container'>
      <h1>Welcome to MyPTHub!</h1>
        <Link to= "/PT">
          <button className='btn'> Physical Therapist</button>
        </Link>
        <Link to= "/patient">
          <button className='btn'>Patient</button>
        </Link>
    </div>
  )
}

export default MainPage
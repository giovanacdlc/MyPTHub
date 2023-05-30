import React, { Component } from 'react';
// import { render } from 'react-dom';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// class App extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <h1>Welcome to the PT Portal!</h1>
//                 <button className='btn'> Register</button> <button className='btn'>Sign in</button>
//             </div>
//         )
//     }
// }  

import { Routes, Route } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login"; 
import Register from "../pages/Register"; 
import "../stylesheet.css"

const App = () => {
    return (
        
                <div className='container'>
                    <Routes>
                        {/* <Route path='/' element={<h1>My App</h1>}/> */}
                        <Route path='/login' element={ <Login/> }/>
                        <Route path='/register' element={ <Register /> }/>
                        <Route path='/' element={ <Dashboard /> }/>
                    </Routes>
                </div>

    )
};


// import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Regoster from './pages/Register';
// import Login from './pages/Login';

//  const App = () => {
//     return (
//        <Router>
//           <h1>React Router Example</h1>
//           <Routes>
//              <Route exact path="/" component={<Dashboard/>} />
//              <Route path="/login" component={<h1>Login</h1>} />
//          </Routes>
//       </Router>
//       );
//     };

export default App;
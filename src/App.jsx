import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import "./stylesheet.css"

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

export default App;
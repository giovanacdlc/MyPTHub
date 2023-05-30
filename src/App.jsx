import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import "./stylesheet.css"
import MainPage from './components/MainPage';
import PTMainPage from './components/PTMainPage';
import PatientMainPage from './components/PatientMainPage';

function App () {
  return (    
    <div className='container'>
      <Routes>
        {/* <Route path='/' element={<h1>My App</h1>}/> */}
        <Route path='/login' element={ <Login/> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/' element={ <MainPage /> }/>
        <Route path='/PT/dashboard' element={ <PTMainPage /> }/>
        <Route path='/patient/dashboard' element={ <PatientMainPage /> }/>
      </Routes>
    </div>
  )
};

export default App;
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; 
import Register from "./components/Register"; 
import "./stylesheet.css"
import MainPage from './components/MainPage';
import PTMainPage from './components/PTMainPage';
import PatientMainPage from './components/PatientMainPage';
import PTWelcome from './components/PTWelcome';

function App () {
  return (    
    <div className='container'>
      <Routes>
        {/* <Route path='/' element={<h1>My App</h1>}/> */}
        <Route path='/' element={ <MainPage /> }/>
        <Route path='/PT' element={ <PTMainPage /> }/>
        <Route path='/patient' element={ <PatientMainPage /> }/>
        <Route path='/PT/register' element={ <Register /> }/>
        <Route path='/patient/register' element={ <Register /> }/>
        <Route path='/PT/login' element={ <Login/> }/>
        <Route path='/patient/login' element={ <Login/> }/>
        <Route path='/PT/Welcome' element={ <PTWelcome /> }/>
      </Routes>
    </div>
  )
};

export default App;
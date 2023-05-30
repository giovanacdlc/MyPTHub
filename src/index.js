import React from "react";
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"; //added this
import { createRoot } from 'react-dom/client';
import "./stylesheet.css"

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
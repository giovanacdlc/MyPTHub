import React from "react";
// import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { BrowserRouter } from "react-router-dom"; //added this
import { createRoot } from 'react-dom/client';

import "./stylesheet.css"

// const root = ReactDOM.createRoot(document.getElementById('root')) //added this (bottom line is original)
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
);

// ReactDOM.render(<App/>, document.getElementById("root"));
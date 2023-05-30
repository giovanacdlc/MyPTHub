import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/App.jsx';
import { BrowserRouter } from "react-router-dom"; //added this

import "./stylesheet.css"

const root = ReactDOM.createRoot(document.getElementById('root')) //added this (bottom line is original)
root.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
);

// ReactDOM.render(<App/>, document.getElementById("root"));
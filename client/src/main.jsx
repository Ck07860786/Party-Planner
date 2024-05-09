import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import {AuthProvide} from './context/auth.jsx'
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvide>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvide>
 
);

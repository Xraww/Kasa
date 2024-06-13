import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import LogementDetails from "./pages/LogementDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/home/logements/:logementId" element={<LogementDetails />} />
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
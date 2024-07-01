import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import LogementDetails from "./pages/LogementDetails/LogementDetails";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home/logements/:logementId" element={<LogementDetails />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    </Router>
  </React.StrictMode>
);
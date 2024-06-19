import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "../styles/Header.scss";
import logo from "../assets/logo.png";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const lastActiveSection = localStorage.getItem("activeSection");

        if (lastActiveSection) {
            setActiveSection(lastActiveSection);
        }
    }, []);
  
    const handleSetActive = (section) => {
        setActiveSection(section);
        localStorage.setItem("activeSection", section);
    };

  return (
    <header>
        <div className="navbar">
            <img src={logo} alt="Logo du site"/>
            
            <div className="navbar-links">
                <Link to="/home" className={`links ${activeSection === "home" ? "active" : ""}`} onClick={() => handleSetActive("home")}>Accueil</Link>
                <Link to="/about" className={`links ${activeSection === "about" ? "active" : ""}`} onClick={() => handleSetActive("about")}>A Propos</Link>
            </div>
        </div>
    </header>
  );
}


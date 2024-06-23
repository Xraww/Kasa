import { useState, useEffect } from "react";
import { Link, useLocation  } from "react-router-dom"
import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const isErrorPage = useLocation().pathname === "/error";

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
                    <Link to="/home" className={`links ${!isErrorPage && activeSection === "home" ? "active" : ""}`} onClick={() => handleSetActive("home")}>Accueil</Link>
                    <Link to="/about" className={`links ${!isErrorPage && activeSection === "about" ? "active" : ""}`} onClick={() => handleSetActive("about")}>A Propos</Link>
                </div>
            </div>
        </header>
    );
}


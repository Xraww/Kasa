import { Link } from "react-router-dom"
import "../styles/Header.scss";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header>
        <div className="navbar">
            <img src={logo} alt="Logo du site"/>
            
            <div className="navbar-links">
                <Link to="/home" className="links">Accueil</Link>
                <Link to="/about" className="links">A Propos</Link>
            </div>
        </div>
    </header>
  );
}


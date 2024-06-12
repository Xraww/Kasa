import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header>
        <ul className="navbar">
            <img src={logo} className="logo" alt="Logo du site"/>
            
            <div className="navbar-links">
                <li>Accueil</li>
                <li>A Propos</li>
            </div>
        </ul>
    </header>
  );
}
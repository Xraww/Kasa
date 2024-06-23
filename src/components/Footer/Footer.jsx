import "./Footer.scss";
import logo from "../../assets/logo.png";

export default function Footer() {
    return (
        <footer>
            <img src={logo} className="logo" alt="Logo du site"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
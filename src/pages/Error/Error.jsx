import { Link } from "react-router-dom"

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Error.scss"

export default function Error() {
    return (
        <div className="Error">
            <Header/>
            <div className="error-container">
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/home">Retourner sur la page d'accueil</Link>
            </div>
            <Footer/>
        </div>
    );
}
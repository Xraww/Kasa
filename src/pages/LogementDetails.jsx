import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import "../styles/LogementDetails.scss";

export default function LogementDetails() {
    const logementId = useParams().logementId;
    const logement = useLocation().state || {};
    const navigate = useNavigate();

    const logementExists = logementId === logement.id;
    
    useEffect(() => {
        if (!logementExists) {
            navigate("/error");
        }
    });
      
    if (!logementExists) {
        return null;
    }

    const [firstName, lastName] = logement.host.name.split(" ");
    return (
        <div className="LogementDetails">
            <Header/>
            <div className="container">
                <Slideshow images={logement.pictures}/>
    
                <div className="details-container">
                    <div className="text">
                        <div className="details-logement">
                            <div className="title-location">
                                <h2>{logement.title}</h2>
                                <p>{logement.location}</p>
                            </div>
    
                            <div className="tags">
                                {logement.tags.map((tag) => (
                                    <p key={tag} className="tag">{tag}</p>
                                ))}
                            </div>
                        </div>
    
                        <div className="details-host">
                            <div className="host-details">
                                <div className="host-name">
                                    <span className="firstname">{firstName}</span>
                                    <span className="lastname">{lastName}</span>
                                </div>
    
                                <img src={logement.host.picture} alt="Propriétaire du logement" id="hostPicture"/>
                            </div>
    
                            <div className="rate-details">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>
                    </div>
    
                    <div className="buttons">
                        <button>Description<span><i className="fa-solid fa-chevron-up"></i></span></button>
                        <button>Équipements<span><i className="fa-solid fa-chevron-up"></i></span></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
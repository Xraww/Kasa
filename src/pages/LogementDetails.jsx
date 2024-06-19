import { useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
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
                                <i className={`fa-solid fa-star ${logement.rating >= 1 ? "active-star" : ""}`}></i>
                                <i className={`fa-solid fa-star ${logement.rating >= 2 ? "active-star" : ""}`}></i>
                                <i className={`fa-solid fa-star ${logement.rating >= 3 ? "active-star" : ""}`}></i>
                                <i className={`fa-solid fa-star ${logement.rating >= 4 ? "active-star" : ""}`}></i>
                                <i className={`fa-solid fa-star ${logement.rating >= 5 ? "active-star" : ""}`}></i>
                            </div>
                        </div>
                    </div>

                    <div className="buttons">
                        <Collapse title="Description" content={logement.description}/>
                        <Collapse title="Équipements" content={logement.equipments}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
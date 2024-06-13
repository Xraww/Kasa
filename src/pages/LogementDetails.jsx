import { useLocation  } from 'react-router-dom'
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/LogementDetails.scss";

export default function LogementDetails() {
    const logement = useLocation().state || {};;
    const [firstName, lastName] = logement.host.name.split(' ')

    console.log(logement);

  return (
    <div className="LogementDetails">
        <Header/>
        <div className="details-container">
            <img src={logement.pictures[0]} alt={logement.title} id="logementPicture"/>

            <div className="details">
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
                                <span class="firstname">{firstName}</span>
                                <span class="lastname">{lastName}</span>
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
                    <button>Description<span><i class="fa-solid fa-chevron-up"></i></span></button>
                    <button>Équipements<span><i class="fa-solid fa-chevron-up"></i></span></button>
               </div>
            </div>
        </div>
        <Footer/>
    </div>
  );
}
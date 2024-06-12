import "../styles/Card.scss";
// voir pour les routes: /logements/** : https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254735-transformez-votre-application-en-single-page-application-avec-react-router

export default function Card(props) {
    console.log("card called");
    return (
        <div className="card">
            <img src={props.img} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}
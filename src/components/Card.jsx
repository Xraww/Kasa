// import "../styles/Card.scss";
// voir pour les routes: /logements/** : https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete/7254735-transformez-votre-application-en-single-page-application-avec-react-router
// <Card img={data.pictures[0]} title="Titre" />
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="Photo du logement"/>
            <p>{props.title}</p>
        </div>
    )
}
import { Link } from "react-router-dom"
import "../styles/Card.scss";

export default function Card(props) {
    const logement = props.data;

    return (
        <Link to={`/home/logements/${logement.id}`} state={logement}>
            <div className="card">
                <img src={logement.pictures[0]} alt={logement.title}/>
                <p>{logement.title}</p>
            </div>
        </Link>
    )
}
import Card from "./Card";
import "../styles/Gallery.scss";
import logements from "../assets/logements.json";
// use map(), voir : https://openclassrooms.com/fr/courses/7008001-debutez-avec-react/7135593-gagnez-en-temps-et-en-efficacite-grace-aux-listes-et-aux-conditions

export default function Gallery() {
  return (
    <div className="gallery">
        {logements.map((logement) => (
            <Card key={logement.id} img={logement.pictures[0]} title={logement.title} />
        ))}
    </div>
  );
}
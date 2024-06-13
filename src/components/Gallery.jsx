import Card from "./Card";
import "../styles/Gallery.scss";
import logements from "../assets/logements.json";

export default function Gallery() {
  return (
    <div className="gallery">
        {logements.map((logement) => (
            <Card key={logement.id} data={logement} />
        ))}
    </div>
  );
}
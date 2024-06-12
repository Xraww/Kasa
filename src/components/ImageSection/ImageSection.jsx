import "./ImageSection.scss";
import img from "../../assets/paysage.jpg";

export default function ImageSection() {
  return (
    <div className="image-section">
        <div className="image-overlay"></div>
        <img src={img} alt="Paysage"/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
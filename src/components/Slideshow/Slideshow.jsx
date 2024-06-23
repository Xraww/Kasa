import { useState } from "react";
import "./Slideshow.scss";

export default function Slideshow(props) {
    const pictures = props.images;
    const [pictureNumber, setPictureNumber] = useState(0);

    const handleSetPictureNumber = (number) => {
        if (number < 0) {
            setPictureNumber(pictures.length - 1);
        } else if (number === (pictures.length)) {
            setPictureNumber(0);
        } else {
            setPictureNumber(number);
        }
    };

    return (
        <div className="Slideshow">
            {pictures.length > 1 ? (<i className="fa-solid fa-chevron-left switch" onClick={() => handleSetPictureNumber(pictureNumber - 1)}></i>) : ""}
            <img src={pictures[pictureNumber]} id="logementPicture" alt="Logement"/>
            {pictures.length > 1 ? (<p className="numbering">{(pictureNumber + 1) + "/" + pictures.length}</p>) : ""}
            {pictures.length > 1 ? (<i className="fa-solid fa-chevron-right switch" onClick={() => handleSetPictureNumber(pictureNumber + 1)}></i>) : ""}
        </div>
    );
}
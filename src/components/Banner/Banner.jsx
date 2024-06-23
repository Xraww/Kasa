import "./Banner.scss";

export default function Banner(props) {
    return (
        <div className="Banner">
            {props.title ? <div className="image-overlay"></div> : ""}
            <img src={props.img} alt="Paysage"/>
            {props.title ? <h1>{props.title}</h1> : ""}
        </div>
    );
}
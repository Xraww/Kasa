import { useState } from "react";
import "../styles/Collapse.scss";

export default function Collapse(props) {
    const title = props.title;
    const content = props.content;
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Collapse">
            <button onClick={toggleCollapse}>{title}<span><i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i></span></button>
            <div className={`collapse-content ${isOpen ? "open" : ""}`}>
                {(typeof content !== "string") ? content.map((item, index) => (
                    <div key={index} className="item">
                        {item}
                    </div>
                )) : content}
            </div>
        </div>
    );
}
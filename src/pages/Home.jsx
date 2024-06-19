import Header from "../components/Header";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

import img from "../assets/paysage.jpg";

export default function Home() {
    return (
        <div className="Home">
            <Header/>
            <Banner title="Chez vous, partout et ailleurs" img={img} />
            <Gallery/>
            <Footer/>
        </div>
    );
}
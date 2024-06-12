import Header from "../components/Header";
import ImageSection from "../components/ImageSection";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="Home">
        <Header/>
        <ImageSection/>
        <Gallery/>
        <Footer/>
    </div>
  );
}
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from '../components/Banner/Banner';
import AboutText from "../components/AboutText/AboutText";


function About() {
    return (
        <>
            <Header />
            <Banner title="About" image='about.jpg' />
            <div className="container">
                <AboutText />
            </div>
            <Footer />
        </>
    )
}

export default About;
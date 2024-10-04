import Banner from '../components/Banner/Banner';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";

function Projects() {
    return (
        <>
            <Header />
            <Banner title="Projects" image='projects.jpg' />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects;
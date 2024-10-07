import { useContext } from "react";
import Banner from '../components/Banner/Banner';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsList from "../components/ProjectsList/ProjectsList";

//CONTEXT
import { AppContext } from "../contexts/AppContext";
function Projects() {
    const appContext = useContext(AppContext);
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.projects} image='projects.jpg' />
            <div className="container">
                <ProjectsList />
            </div>
            <Footer />
        </>
    )
}

export default Projects;
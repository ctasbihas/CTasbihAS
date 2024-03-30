import Carousel from "../Carousel";
import SectionTitle from "../SectionTitle";

const Projects = () => {
    return (
        <section className="my-10">
            <SectionTitle
                title="Projects"
                description="Some of my recent projects"
            />
            <Carousel />
        </section>
    );
};

export default Projects;

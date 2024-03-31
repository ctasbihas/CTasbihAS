import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import AboutMe from "../components/Home/AboutMe";
import Hero from "../components/Home/Hero";

const App = () => {
    return (
        <main>
            <Hero />
            <AboutMe />
            <Skills />
            <Projects />
        </main>
    );
};

export default App;

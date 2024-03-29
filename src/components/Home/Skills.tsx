import { CiMobile3 } from "react-icons/ci";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrHtml5 } from "react-icons/gr";
import { RiComputerLine, RiReactjsLine } from "react-icons/ri";
import { SiCss3, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import SectionTitle from "../SectionTitle";

const Skills = () => {
    const skills = [
        {
            name: "HTML",
            icon: (
                <GrHtml5
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#E54F26",
        },
        {
            name: "CSS",
            icon: (
                <SiCss3
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#0C73B8",
        },
        {
            name: "JS",
            icon: (
                <TbBrandJavascript
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#E7A020",
        },
        {
            name: "React.js",
            icon: (
                <FaReact
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#28A9E0",
        },
        {
            name: "Next.js",
            icon: (
                <TbBrandNextjs
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#28A9E0",
        },
        {
            name: "Express.js",
            icon: (
                <SiExpress
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#28A9E0",
        },
        {
            name: "MongoDB",
            icon: (
                <SiMongodb
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#28A9E0",
        },
        {
            name: "React Native",
            icon: (
                <RiReactjsLine
                    size={44}
                    color="#FFFFFF"
                />
            ),
            color: "#28A9E0",
        },
    ];
    return (
        <section className="py-10 px-4 bg-bg1">
            <SectionTitle
                title="Skills"
                description="My technical level and experience in the field of web development."
            />
            <div className="max-w-3xl mx-auto px-5 mt-10 flex flex-col sm:flex-row gap-10">
                <div className="bg-brand2 font-ibmplexmono font-medium text-2xl py-5 flex flex-1 flex-col items-center rounded-lg border-l-8 border-css">
                    <RiComputerLine size={35} />
                    <h3>Web Development</h3>
                </div>
                <div className="bg-brand2 font-ibmplexmono font-medium text-2xl py-5 flex flex-1 flex-col items-center rounded-lg border-l-8 border-react">
                    <CiMobile3 size={35} />
                    <h3>App Development</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center"
                    >
                        <div
                            className={
                                "w-24 h-24 flex items-center justify-center rounded-full"
                            }
                            style={{ backgroundColor: skill.color }}
                        >
                            {skill.icon}
                        </div>
                        <h1
                            className={`text-3xl font-ibmplexmono text-center`}
                            style={{ color: skill.color }}
                        >
                            {skill.name}
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

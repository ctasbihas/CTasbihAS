import { AnimatedText } from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import featuredProject1 from "@/../public/images/projects/project-job_network.jpg";
import projectCalculator from "@/../public/images/projects/project-calculator.jpg";
import projectConventionCenter from "@/../public/images/projects/project-convention_center.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-lg p-12">
            <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6">
                <span className="text-primary font-medium text-xl">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark">{summary}</p>
                <div className="mt-2 flex items-center">
                    {github && <Link href={github} target="_blank" className="w-10" ><GithubIcon /></Link>}
                    <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold" >Visit Project</Link>
                </div>
            </div>
        </article>
    );
};
const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col justify-between rounded-3xl border border-solid border-dark bg-light shadow-lg p-6">
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className="w-full flex flex-col items-start justify-between">
                <span className="text-primary font-medium text-xl mt-4">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="mt-2 w-full flex items-center justify-between">
                    <Link href={link} target="_blank" className="text-lg font-semibold underline" >Visit</Link>
                    {github ? <Link href={github} target="_blank" className="w-10" ><GithubIcon /></Link> : <h1>Github Link isn&#39;t available.</h1>}
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title>C. Tasbih A. S. | Projects Page</title>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-12">
                            <FeaturedProject
                                type={"Featured Project"}
                                title={"Job Network"}
                                summary={"It is a job hunting website where you can apply for jobs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae modi magnam omnis ducimus? Fugit earum voluptatibus quo unde, vero quam."}
                                img={featuredProject1} link={"https://job-network.netlify.app"} github={"/"}
                            />
                        </div>
                        <div className="col-span-6">
                            <Project type={"Website"} title={"React Calculator"} img={projectCalculator} link={"https://ctas-react-calculator.netlify.app/"} />
                        </div>
                        <div className="col-span-6">
                            <Project type={"Website"} title={"Convention Center"} img={projectConventionCenter} link={"https://ctasbihas.github.io/convention-center"} github={"https://github.com/ctasbihas/convention-center"} />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};
export default projects;
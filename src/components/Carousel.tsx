"use client";

import projects from "@/../public/projects.json";
import Image from "next/image";
import { useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const nextSlide = (index: number) => {
        if (index === projects.length - 1) {
            setSlide(0);
            return;
        }
        setSlide(++index);
    };
    const previewsSlide = (index: number) => {
        if (index === 0) {
            setSlide(projects.length - 1);
            return;
        }
        setSlide(--index);
    };

    return (
        <div className="my-10 px-5 lg:px-10 flex items-center">
            <BiLeftArrow
                size={35}
                color="white"
                onClick={() => previewsSlide(slide)}
                className="lg:w-10 hidden lg:block"
            />
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${
                        slide === index ? "block" : "hidden"
                    } lg:w-[90%] flex flex-col lg:flex-row-reverse gap-5 items-center mx-auto lg:px-10`}
                >
                    <div
                        className={
                            "lg:w-2/3 ml-auto h-96 overflow-auto border-8 border-black rounded-xl"
                        }
                    >
                        <Image
                            src={project.preview}
                            alt={project.title}
                            className="object-contain mx-auto w-full rounded-md"
                            width={450}
                            height={600}
                            loading="lazy"
                        />
                    </div>
                    <div className="flex justify-between">
                        <BiLeftArrow
                            size={35}
                            color="white"
                            onClick={() => previewsSlide(slide)}
                            className="lg:w-10 lg:hidden block"
                        />
                        <BiRightArrow
                            size={35}
                            color="white"
                            onClick={() => nextSlide(slide)}
                            className="lg:w-10 lg:hidden block"
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl font-ubuntu text-brand1">
                            {project.title}
                        </h1>
                        <p className="text-lg font-ibmplexmono font-normal text-white mt-5">
                            {project.description}
                        </p>
                        <p className="text-lg font-ibmplexmono font-normal text-white mt-5 flex gap-6 items-center justify-center">
                            <a
                                href={project.github_url}
                                target="_blank"
                                className="flex gap-2 items-center justify-center text-brand1 font-ibmplexmono font-medium text-lg cursor-pointer hover:text-brand2"
                            >
                                <FaGithub />
                                {project.web_server ? "Client" : "Github"}
                            </a>
                            {project.web_server && (
                                <a
                                    href={project.web_server}
                                    target="_blank"
                                    className="flex gap-2 items-center justify-center text-brand1 font-ibmplexmono font-medium text-lg cursor-pointer hover:text-brand2"
                                >
                                    <FaGithub />
                                    Server
                                </a>
                            )}
                            <a
                                href={project.url}
                                target="_blank"
                                className="flex gap-2 items-center justify-center text-brand1 font-ibmplexmono font-medium text-lg cursor-pointer hover:text-brand2"
                            >
                                <FaGlobe />
                                Live
                            </a>
                        </p>
                    </div>
                </div>
            ))}
            <BiRightArrow
                size={35}
                color="white"
                onClick={() => nextSlide(slide)}
                className="lg:w-10 hidden lg:block"
            />
        </div>
    );
};

export default Carousel;

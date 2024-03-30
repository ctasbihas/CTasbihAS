"use client";

import projects from "@/../public/projects.json";
import Image from "next/image";
import { FC, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaGithub, FaGlobe } from "react-icons/fa";

type Project = {
    title: string;
    description: string;
    preview: string;
    github_url: string;
    web_server?: string;
    url: string;
};

type SlideProps = {
    project: Project;
    isCurrent: boolean;
    onNavigate: (direction: "prev" | "next") => void;
};

type SlideControlsProps = {
    onNavigate: (direction: "prev" | "next") => void;
};

type NavigationArrowProps = {
    direction: "prev" | "next";
    onClick: () => void;
};

type ProjectLinkProps = {
    href: string;
    label: string;
    icon: JSX.Element;
};

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const navigateSlide = (direction: "next" | "prev") => {
        setCurrentSlide((prevSlide) => {
            if (direction === "next") {
                return (prevSlide + 1) % projects.length; // Loop back to the start
            } else {
                return (prevSlide - 1 + projects.length) % projects.length; // Loop back to the end
            }
        });
    };

    return (
        <div className="my-10 px-5 lg:px-10 flex items-center">
            <NavigationArrow
                direction="prev"
                onClick={() => navigateSlide("prev")}
            />
            {projects.map((project, index) => (
                <Slide
                    key={index}
                    project={project}
                    isCurrent={index === currentSlide}
                    onNavigate={navigateSlide}
                />
            ))}
            <NavigationArrow
                direction="next"
                onClick={() => navigateSlide("next")}
            />
        </div>
    );
};

const NavigationArrow: FC<NavigationArrowProps> = ({ direction, onClick }) => (
    <BiLeftArrow
        size={35}
        color="white"
        onClick={onClick}
        className="lg:w-10 hidden lg:block"
        style={{ transform: direction === "next" ? "rotate(180deg)" : "none" }}
    />
);

const Slide: FC<SlideProps> = ({ project, isCurrent, onNavigate }) => (
    <div
        className={`${
            isCurrent ? "block" : "hidden"
        } lg:w-[90%] flex flex-col lg:flex-row-reverse gap-5 items-center mx-auto lg:px-10`}
    >
        <ProjectPreview
            imageSrc={project.preview}
            altText={project.title}
        />
        <SlideControls onNavigate={onNavigate} />
        <ProjectInfo project={project} />
    </div>
);

const ProjectPreview: FC<{ imageSrc: string; altText: string }> = ({
    imageSrc,
    altText,
}) => (
    <div className="lg:w-2/3 ml-auto h-96 overflow-auto border-8 border-black rounded-xl">
        <Image
            src={imageSrc}
            alt={altText}
            className="object-contain mx-auto w-full rounded-md"
            width={450}
            height={600}
            loading="lazy"
        />
    </div>
);

const SlideControls: FC<SlideControlsProps> = ({ onNavigate }) => (
    <div className="flex justify-between">
        <BiLeftArrow
            size={35}
            color="white"
            onClick={() => onNavigate("prev")}
            className="lg:w-10 lg:hidden block"
        />
        <BiRightArrow
            size={35}
            color="white"
            onClick={() => onNavigate("next")}
            className="lg:w-10 lg:hidden block"
        />
    </div>
);

const ProjectInfo: FC<{ project: Project }> = ({ project }) => (
    <div>
        <h1 className="text-3xl font-ubuntu text-brand1">{project.title}</h1>
        <p className="text-lg font-ibmplexmono font-normal text-white mt-5">
            {project.description}
        </p>
        <div className="text-lg font-ibmplexmono font-normal text-white mt-5 flex gap-6 items-center justify-center">
            <ProjectLink
                href={project.github_url}
                label={project.web_server ? "Client" : "Github"}
                icon={<FaGithub />}
            />
            {project.web_server && (
                <ProjectLink
                    href={project.web_server}
                    label="Server"
                    icon={<FaGithub />}
                />
            )}
            <ProjectLink
                href={project.url}
                label="Live"
                icon={<FaGlobe />}
            />
        </div>
    </div>
);

const ProjectLink: FC<ProjectLinkProps> = ({ href, label, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center justify-center text-brand1 font-ibmplexmono font-medium text-lg cursor-pointer hover:text-brand2"
    >
        {icon}
        {label}
    </a>
);

export default Carousel;

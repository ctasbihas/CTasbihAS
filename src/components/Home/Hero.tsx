import Picture from "@/../public/assets/tasbih.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";

const Hero = () => {
    return (
        <section className="bg-bg1 px-5 md:px-16 lg:px-32 py-10">
            <h1 className="hidden md:block mb-10 text-center text-7xl font-ubuntu text-brand2">
                Developer
            </h1>
            <div className="lg:flex items-center justify-evenly">
                <div className="max-w-[400px] lg:w-2/5 mx-auto py-8 px-4 border-4 rounded-tl-[100px] rounded-br-[100px] border-white gap-4">
                    <div className="flex flex-col items-center ">
                        <Image
                            src={Picture}
                            alt="Tasbih"
                            width={100}
                            height={100}
                            className="rounded-full border-2 border-brand1"
                        />
                        <h1 className="text-3xl font-medium font-ibmplexmono text-white">
                            Tasbih Ahmed
                        </h1>
                        <h4 className="text-sm font-ibmplexmono text-white">
                            Full-Stack Developer
                        </h4>
                    </div>
                    <ul className="flex flex-col gap-3 mt-7 text-white font-ibmplexmono">
                        <li className="flex items-center">
                            <MdAlternateEmail /> ctasbihas@gmail.com
                        </li>
                        <li className="flex items-center">
                            <FaWhatsapp />
                            +8801642399394
                        </li>
                        <li className="flex items-center">
                            <GrLocation />
                            Dhaka, Bangladesh
                        </li>
                    </ul>
                    <ul className="flex flex-wrap justify-center gap-4 my-8">
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            HTML
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            CSS
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            JS
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            MongoDB
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            Express.js
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            React.js
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            Node.js
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            Next.js
                        </li>
                        <li className="bg-brand1 rounded-full p-1 px-2 font-medium text-sm">
                            React Native
                        </li>
                    </ul>
                    <button className="flex items-center gap-1 text-bg1 font-ibmplexmono font-medium text-sm bg-white py-3 px-6 rounded-full">
                        Download Resume <FiDownload />
                    </button>
                </div>
                <div className="mt-14 lg:mt-0  lg:w-2/5">
                    <h1 className="text-3xl text-white font-ubuntu font-medium">
                        <span className="font-ibmplexmono font-normal text-lg text-brand2">
                            {"<title>"}
                        </span>
                        <span className="pl-10 block">
                            Hey,
                            <br />
                            I&rsquo;m{" "}
                            <span className="text-brand1">Tasbih Ahmed</span>,
                            <br />
                            Full-Stack Developer
                        </span>
                        <span className="font-ibmplexmono font-normal text-lg text-brand2">
                            {"</title>"}
                        </span>
                    </h1>
                    <p className="text-base text-white font-ibmplexmono font-normal">
                        <span className="font-ibmplexmono font-normal text-lg text-brand2">
                            {"<description>"}
                        </span>
                        <span className="px-10 block">
                            I help business grow by crafting amazing web
                            experiences. If you’re looking for a developer that
                            likes to get stuff done,
                        </span>
                        <span className="font-ibmplexmono font-normal text-lg text-brand2">
                            {"</description>"}
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

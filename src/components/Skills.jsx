import { motion } from "framer-motion";

export const Skill = ({name, x, y}) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y }}
            transition={{duration: 1.5}}
        >
            {name}
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <>
            <h1 className="font-bold text-7xl mt-64 w-full text-center">Skills</h1>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name={"HTML"} x={"-20vw"} y={"2vw"} />
                <Skill name={"CSS"} x={"-5vw"} y={"-10vw"} />
                <Skill name={"Java Script"} x={"20vw"} y={"6vw"} />
                <Skill name={"MongoDB"} x={"-23vw"} y={"-17vw"} />
                <Skill name={"Express.js"} x={"-5vw"} y={"-18vw"} />
                <Skill name={"Node.js"} x={"25vw"} y={"-15vw"} />
                <Skill name={"Next.js"} x={"0vw"} y={"12vw"} />
                <Skill name={"React.js"} x={"13vw"} y={"-17vw"} />
                <Skill name={"Firebase"} x={"-25vw"} y={"18vw"} />
                <Skill name={"TailwindCSS"} x={"18vw"} y={"18vw"} />
            </div>
        </>
    );
};
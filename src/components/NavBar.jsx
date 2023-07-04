import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "./Logo";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Irons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();
    return (
        <Link
            href={href}
            className={`${className} relative group`}
        >
            {title}
            <span className={`h-0.5 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

export const NavBar = () => {
    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <nav>
                <CustomLink href="/" title={"Home"} className="mr-4" />
                <CustomLink href="/about" title={"About"} className="mx-4" />
                <CustomLink href="/projects" title={"Projects"} className="mx-4" />
                <CustomLink href="/articles" title={"Articles"} className="ml-4" />
            </nav>

            <nav className="flex items-center justify-center flex-wrap">
                <motion.a
                    href="https://github.com/ctasbihas" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale: 0.9}}
                    className="w-7"
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href="https://twitter.com/ctasbihas" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale: 0.9}}
                    className="w-7 mx-5"
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/ctasbihas" target={"_blank"}
                    whileHover={{ y: -2 }}
                    whileTap={{scale: 0.9}}
                    className="w-7"
                >
                    <LinkedInIcon />
                </motion.a>
            </nav>

            <div className="absolute left-[50%] translate-x-[-50%] ">
                <Logo />
            </div>
        </header>
    );
};

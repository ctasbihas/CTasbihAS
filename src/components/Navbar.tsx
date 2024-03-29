import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-6 bg-bg1 sticky top-0">
            <div className="font-ibmplexmono font-normal text-base sm:text-2xl lg:text-3xl">
                <code className="text-brand1">{"<C/> "}</code>
                <span className="font-ibmplexmono text-white">CTasbihAS</span>
            </div>
            <div className="flex items-center gap-6 sm:gap-10 md:14">
                <ul className="flex gap-6 text-white font-ibmplexmono text-base lg:text-xl font-normal">
                    <Link
                        href={"/"}
                        className="text-brand1"
                    >
                        Home
                    </Link>
                    <Link href={"/blogs"}>Blogs</Link>
                </ul>
                <div>
                    <FaSearch
                        color="#FFFFFF"
                        className="inline md:hidden"
                    />
                    <input
                        type="text"
                        className="rounded-full h-8 w-48 px-2 focus:outline-none font-semibold hidden md:inline"
                        spellCheck="false"
                        placeholder="Search..."
                    />
                </div>
                <ul className="sm:flex gap-5 hidden">
                    <SocialLink
                        name={"LinkedIn"}
                        Icon={FaLinkedinIn}
                        link={"https://linkedin.com/in/ctasbihas"}
                    />
                    <SocialLink
                        name={"Instagram"}
                        Icon={FaInstagram}
                        link={"#"}
                    />
                    <SocialLink
                        name={"Twitter"}
                        Icon={FaXTwitter}
                        link={"#"}
                    />
                </ul>
            </div>
        </nav>
    );
};

const SocialLink = ({ name, link, Icon }: any) => {
    return (
        <a
            href={link}
            className="flex items-center gap-2 font-ibmplexmono font-normal text-base text-white"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon color="#12F7D6" />{" "}
            <span className="hidden lg:inline">{name}</span>
        </a>
    );
};

export default Navbar;

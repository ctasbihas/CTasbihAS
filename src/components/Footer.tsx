import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

const Footer = () => {
    const links = [
        {
            icon: <FaLinkedinIn size={20} />,
            url: "https://www.linkedin.com/in/ctasbihas",
        },
        {
            icon: <TbBrandGithubFilled size={20} />,
            url: "https://github.com/ctasbihas",
        },
        {
            icon: <RiInstagramFill size={20} />,
            url: "https://www.instagram.com/ctasbihas",
        },
        {
            icon: <FaFacebookF size={20} />,
            url: "https://www.facebook.com/ctasbihas",
        },
        {
            icon: <FaTwitter size={20} />,
            url: "https://twitter.com/ctasbihas",
        },
    ];
    return (
        <>
            <hr className="w-4/5 mx-auto border-gray" />
            <footer className="flex flex-col lg:flex-row-reverse gap-5 items-center justify-between py-5 lg:w-4/5 mx-auto">
                <div className="flex items-center justify-center gap-4">
                    {links.map((link, index) => (
                        <IconLink
                            key={index}
                            icon={link.icon}
                            url={link.url}
                        />
                    ))}
                </div>
                <p className="text-center text-white text-lg">
                    &copy; {new Date().getFullYear()} Tasbih Ahmed. All Rights
                    Reserved.
                </p>
            </footer>
        </>
    );
};

const IconLink = ({ icon, url }: { icon: React.ReactNode; url: string }) => {
    return (
        <a
            href={url}
            className="p-2 bg-brand2 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
        >
            {icon}
        </a>
    );
};

export default Footer;

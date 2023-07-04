import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export const Logo = () => {
    return (
        <div className="flex items-center justify-center">
            <MotionLink
                href="/"
                className="px-4 py-2 bg-dark text-light flex items-center justify-center rounded-full text-sm font-bold"
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: { duration: 1, repeat: Infinity }
                }}
            >
                CTAS
            </MotionLink>
        </div>
    );
};
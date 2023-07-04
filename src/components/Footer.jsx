import Link from "next/link";
import { Layout } from "./Layout";

export const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
            <Layout className="py-8 flex items-center justify-between">
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className="flex items-center">
                    Build By <span className="text-primary text-2xl px-1">&#9825;</span> <Link className="underline underline-offset-1" href="/">Tasbih Ahmed</Link>
                </div>
                <Link href="mailto:ctasbihas@gmail.com">Say Hello</Link>
            </Layout>
        </footer>
    );
};
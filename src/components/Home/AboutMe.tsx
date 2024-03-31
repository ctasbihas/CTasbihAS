import Image from "next/image";
import Picture from "../../../public/assets/desk-setup.avif";

const AboutMe = () => {
    return (
        <section className="px-4 sm:px-12 py-12 bg-bg2 lg:flex items-center gap-x-8">
            {/* TODO: Fix text alignment */}
            <div>
                <h1 className="text-3xl text-white font-ubuntu bg-bg1 border-4 border-brand1 px-8 py-4 rounded-tl-[40px] rounded-br-[40px]">
                    About Me
                </h1>
                <div className="font-ibmplexmono font-normal bg-bg1 p-5 rounded-3xl my-10 text-brand2 space-y-2">
                    <p>{"<about>"}</p>
                    <p className="text-3xl text-brand1 font-medium ml-5">
                        Hey there,
                    </p>
                    <p className="text-base text-white font-normal ml-5">
                        I&lsquo;m Tasbih Ahmed and I&lsquo;ve mastered MERN
                        stack technologies and also Next.js etc.
                    </p>
                    <p className="text-base text-red-300 font-normal ml-5">
                        Dolorum ratione quia nemo iusto blanditiis, explicabo
                        eos eveniet facere aperiam ex repellat praesentium eius
                        illum, laborum animi? Magni, hic!
                    </p>
                    <p className="text-base text-red-300 font-normal ml-5">
                        Debitis quam unde, modi quidem ut laborum rem. Maiores
                        repellendus quam aspernatur, sint cumque maxime officia
                        qui sequi repudiandae veniam!
                    </p>
                    <p className="text-base text-red-300 font-normal ml-5">
                        Unde fuga, quisquam commodi nisi nobis atque soluta?
                        Illo cumque accusamus sequi repellendus harum maiores
                        cum repudiandae a dignissimos facere?
                    </p>
                    <p>{"</about>"}</p>
                </div>
            </div>
            <Image
                src={Picture}
                alt="about me background"
                className="rounded-2xl mx-auto"
                loading="lazy"
            />
        </section>
    );
};

export default AboutMe;

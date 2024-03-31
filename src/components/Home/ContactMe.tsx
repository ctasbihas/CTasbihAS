import SectionTitle from "../SectionTitle";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
    return (
        <section className="py-10 px-5">
            <SectionTitle
                title="Contact Me"
                description="Get in touch with me"
            />
            <h1 className="text-3xl text-white font-ubuntu bg-bg1 border-4 border-brand1 px-8 py-4 rounded-tl-[40px] rounded-br-[40px] mt-10 w-fit mx-auto">
                Send Mail
            </h1>

            <ContactMeForm />
        </section>
    );
};

export default ContactMe;

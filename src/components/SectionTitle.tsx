const SectionTitle = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    return (
        <div className="text-center">
            <span className="text-5xl text-brand1 font-ubuntu px-6 rounded-b-2xl border-b-2 border-brand1">
                {title}
            </span>
            <p className="text-lg font-ibmplexmono font-normal text-white mt-5 px-10">
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;

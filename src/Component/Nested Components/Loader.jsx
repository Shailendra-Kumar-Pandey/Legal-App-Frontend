import loader from "../../assets/loader.svg"

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 bg-black/40 z-[9999]">
            <div className="w-full flex justify-center items-center">
                <img src={loader} alt="Loader" className="w-[25%] md:w-[15%] lg:w-[10%] xl:w-[10%] 2xl:w-[10%]" />
            </div>
        </div>
    );
};

export default Loader;

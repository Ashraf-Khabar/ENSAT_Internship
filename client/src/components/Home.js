const Home = () => {
    return (
        <div className="container relative z-10 flex  px-6 py-32 h-full md:px-12 xl:py-10">
            <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            
                <h2 className="mt-4 text-6xl font-bold leading-tight text-black sm:text-7xl">
                    Let yourself be carried

                    and help each other to find our right path
                </h2>
                <a href="#"
                   className="block px-4 py-3 mt-10 text-lg font-bold text-white
                    uppercase bg-black
                    rounded-lg hover:bg-orange-700">
                    Discover
                </a>
            </div>
        </div>

    );
};

export default Home;
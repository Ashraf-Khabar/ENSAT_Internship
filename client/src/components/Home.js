const Home = () => {
    return (
        <div className="container relative z-10 flex  px-6 py-32  md:px-12 xl:py-40">
            <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
            <span className="font-bold text-yellow-400 uppercase">
                Stage app (mazal mal9ina smiya o logo )
            </span>
                <h1 className="mt-4 text-6xl font-bold leading-tight text-white sm:text-7xl">
                    Let yourself be carried
                    <br/>
                    and help each other to find our right path
                </h1>
                <a href="#"
                   className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-white rounded-lg hover:bg-gray-100">
                    Discover
                </a>
            </div>
        </div>

    );
};

export default Home;
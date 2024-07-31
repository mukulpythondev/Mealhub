const Shimmer = () => {
    return (
        <div className="w-80 h-52 m-5 p-5 rounded-lg bg-gray-100 shadow-lg flex flex-col justify-between animate-pulse">
            <div className="w-full h-32 bg-gray-200 rounded-lg"></div>
            <div className="w-full h-5 bg-gray-200 rounded-lg mt-4"></div>
            <div className="w-full h-5 bg-gray-200 rounded-lg mt-2"></div>
            <div className="w-1/2 h-5 bg-gray-200 rounded-lg mt-2"></div>
        </div>
    );
};

export default Shimmer;

const Shimmer = () => {
    return (
        <div className="flex flex-wrap w-5/6 justify-center items-center m-auto">
            {Array(20).fill("").map((e, index) => <div key={index} className="bg-gray-300 w-72 m-3 p-2 h-72"></div>)}
        </div>
    );
}

export default Shimmer;
function Technology({img, name}) {
    return(
        <div className=" flex flex-col items-center w-1/4 p-4 ">
            <div className="rounded-2xl border-4 border-secondary-700 transition duration-150 ease-in-out hover:bg-secondary-700 hover:scale-105 w-full flex flex-col items-center text-white p-4">
            <i className={img + " text-9xl"} ></i>
            <h2 className="text-2xl mt-4 ">{name}</h2>
            </div>
        </div>
    )
}

export default Technology;
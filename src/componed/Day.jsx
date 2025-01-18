const Day = (props) => {
    const {daytext, city, dayTemp, getWeatherImage} = props
    

    return(
    <div className=" w-[400px] h-[800px] min-w-120 top-16 left-40 bg-white/75 px-[30px] py-[40px] z-20 rounded-xl shadow-lg gap-[30px] flex flex-col justify-center ">
            <div className="flex gap-[50px] items-center">
              <div>
                <p className=" text-gray-500 font-medium ">
                  September 10, 2021
                </p>
                <h1 className="text-slate-950 font-extrabold  text-5xl">
                  {city}
                </h1>
              </div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 20 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4768 21.5772L17.1596 13.2151C20.2226 7.7453 16.2691 1 10 1C3.73095 1 -0.222629 7.74531 2.84045 13.2151L7.52323 21.5772C8.60716 23.5128 11.3928 23.5128 12.4768 21.5772Z"
                  stroke="gray"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <img src={getWeatherImage()} className="flex" />
            <div className="px-12">
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                {dayTemp}
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-violet-400">
                {daytext}
              </h6>
              <div className="flex items-center justify-between ">
                <img src="./Home.png"/>
                <img src="./Pin.png" />
                <img src="./Heart.png" />
                <img src="./User.png" />
              </div>
            </div>
          </div>
    )
}
export default Day;
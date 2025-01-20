import Daysun from "../assets/svg/Daysun";

const Day = (props) => {
    const {daytext, getWeatherImage ,city, dayTemp } = props
    

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
              <Daysun />
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
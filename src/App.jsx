import { useEffect, useState } from "react";
import countriesData from "./data";
import { getAllCities } from "./utils/get-all-cities";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar, Mongolia");
  const [filteredData, setFilteredData] = useState([]);
  const [weatherData, setWeatherData] = useState({});

  const getCountries = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const result = await response.json();
      const countries = result.data;
      const cities = getAllCities(countries);
      console.log
      setAllCities(cities);
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (event) => {
    setSearchValue(event.target.value);
    const filtered = allCities
    .filter((el) => el.startsWith(searchValue))
    .slice(0, 5);

    setFilteredData(filtered);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <div className=" w-full  h-[1200px] w-[2200px] justify-center items-center flex">
      <div className="flex absolute mt-[-50vw] justify-center text-white z-30">
          <input className="bg-black"/>
            <div className="">
            {filteredData.map((el) => (
            <p key={el}>{el}</p>
            ))}
          </div>
        </div> 
        <div className=" bg-slate-50 h-full w-1/2 flex justify-center items-center flex-col relative">
      
          <div className=" w-[400px] h-[800px] min-w-120 top-16 left-40 bg-white/75 px-[30px] py-[40px] z-20 rounded-xl shadow-lg gap-[30px] flex flex-col justify-center ">  
            <div className="flex gap-[50px] items-center">
              <div>
                <p className=" text-gray-500 font-medium ">
                  September 10, 2021
                </p>
                <h1 className="text-slate-950 font-extrabold  text-5xl">
                  Ulaanbaatar
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img src="./icon.png" className="flex" />
            <div className="px-12">
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                16°
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-indigo-500">
                Sunny
              </h6>
              <div className="flex items-center justify-between">
                <img src="./Home.png" />
                <img src="./Pin.png" />
                <img src="./Heart.png" />
                <img src="./User.png" />
              </div>
            </div>
          </div>
          </div>
          <div className=" h-full w-1/2 bg-slate-900  flex justify-center items-center">
          <div className=" w-[400px] h-[800px] min-w-120 top-16 left-40 bg-[#111827]/75 px-[30px] py-[40px] z-20 rounded-xl shadow-lg gap-[30px] flex flex-col backdrop-blur-md mb-[-10]">
            <div className="flex gap-[50px] items-center">
              <div>
                <p className=" text-gray-500 font-medium ">
                  September 10, 2021
                </p>
                <h1 className="text-gray-50 font-extrabold  text-5xl">
                  Ulaanbaatar
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <img src="./Night Storm.png" className="flex" />
            <div className="px-12">
              <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
                -45°
              </div>
              <h6 className="font-extrabold mb-12 h-6 text-cyan-500">Cold</h6>
              <div className="flex items-center justify-between">
                <img src="./Home.png" />
                <img src="./Pin.png" />
                <img src="./Heart.png" />
                <img src="./User.png" />
              </div>
            </div>
          </div>
        </div>
       
        </div>
       


        
        <div className="rounded-full w-[140px] h-[140px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-gray-4 flex items-center justify-center bg-[white] gap-[20px]">
          <svg
            width="43"
            height="86"
            viewBox="0 0 43 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1296 7.58989L2.54477 32.8821C0.849461 36.0473 0 39.5213 0 43C0 46.4791 0.849461 49.9523 2.54477 53.1179L16.1296 78.4105C18.6335 83.0823 23.5304 86 28.8593 86H43.2889V78.835H43.2842C40.622 78.835 38.1737 77.3781 36.9216 75.0428L23.3418 49.7455C22.2069 47.6366 21.6413 45.3208 21.6413 43C21.6413 40.6788 22.2069 38.363 23.3418 36.2549L36.9216 10.9577C38.1737 8.62162 40.622 7.16533 43.2842 7.16533H43.2889V0H28.8593C23.5304 0 18.6335 2.91825 16.1296 7.58989Z"
              fill="#111111"
            />
          </svg>
          <svg
            width="44"
            height="86"
            viewBox="0 0 44 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.7442 32.882L27.1599 7.58993C24.6554 2.91778 19.7591 0 14.43 0H0V7.16486H0.00510914C2.66726 7.16486 5.11563 8.62166 6.36732 10.9572L19.9469 36.2543C21.0827 38.3633 21.647 40.679 21.647 42.9999C21.647 45.3211 21.0827 47.6368 19.9469 49.7454L6.36732 75.0423C5.11563 77.3783 2.66726 78.8345 0.00510914 78.8345H0V85.9999H14.43C19.7591 85.9999 24.6554 83.0821 27.1599 78.41L40.7442 53.1177C42.4388 49.9526 43.2889 46.4785 43.2889 42.9999C43.2889 39.5211 42.4388 36.0475 40.7442 32.882Z"
              fill="#111111"
            />
          </svg>
          <div className="rounded-full w-[340px] h-[340px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2"></div>
          <div className="rounded-full w-[540px] h-[540px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2"></div>
          <div className="rounded-full w-[940px] h-[940px]  top-1/2 left-1/2 m-100 absolute -translate-x-1/2 -translate-y-1/2 border border-2">
            {" "}
          </div>
        </div>
       
    </>
  );
}
console.log(countriesData);
export default App;

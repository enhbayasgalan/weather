import { getAllCities } from "../utils/get-all-cities";
import { useEffect, useState } from "react";
const Searchbar = (props) => {
    const { setSelectedCity} = props
  const [searchValue, setSearchValue] = useState("");
  const [allCities, setAllCities] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
      const getCountries = async () => {
        try {
          const response = await fetch(
            "https://countriesnow.space/api/v0.1/countries"
          );
          // console.log(response);
    
          const result = await response.json();
          // console.log(result);
    
          const countries = result.data;
          const cities = getAllCities(countries);
          console.log;
          setAllCities(cities);
        } catch (error) {
          console.log(error);
        }
      };

      const handleClickCity = (city) => {
        setSelectedCity(city);
      };
    
      const onChange = (event) => {
        setSearchValue(event.target.value);
        const filtered = allCities
          .filter((el) => el.toLowerCase().startsWith(searchValue.toLowerCase()))
          .slice(0, 4);
    
        setFilteredData(filtered);
      };

      useEffect(()=>{
          getCountries();
        })
    
    return(
      <div className="flex absolute justify-center text-black z-30 flex-col top-[200px]">
        <div className="flex items-center">
          <svg
            className="absolute left-6 flex "
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
                fill="black"
              />
            </g>
          </svg>

          <input
            className="bg-gray-600 w-[512px] h-[80px] rounded-full py-4 pl-20 pr-6 text-[32px]"
            placeholder="search"
            value={searchValue}
            onChange={onChange}
          />
        </div>
        {searchValue.length !== 0 ? (
          <div className="mt-2.5 rounded-3xl bg-white/80 text-[20px] gap-x-4 px-6 ">
            {filteredData.map((el, index) => (
              <p onClick={() => handleClickCity(el)} key={index}>
                {el}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    )
}
export default Searchbar;
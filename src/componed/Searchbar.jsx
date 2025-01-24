import Search from "../assets/svg/Search";
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
        setSearchValue("")
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
        <Search />

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
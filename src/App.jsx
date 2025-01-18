import { useEffect, useState } from "react";
import countriesData from "./data";
import { getAllCities } from "./utils/get-all-cities";
import Circles from "./componed/Circle";
import Day from "./componed/Day";
import Night from "./componed/Night";
import Searchbar from "./componed/Searchbar";

function App() {

  const [selectedCity, setSelectedCity] = useState("Ulaanbaatar");
 
  const [weatherData, setWeatherData] = useState({});
  const [dayTemp, setDaytemp] = useState("");
  const [nightTemp, setNightTemp] = useState("");
  const [daytext, setDaytext] = useState("");
  const [nighttext, setnighttext] = useState("");
  const [isCon, setIcon] = useState("");
  const [city, setCity] = useState("");

  console.log(weatherData);

  

  const weatherApiKey = "f1312c3dbf794061b8b71014251601";

  const getWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${selectedCity}`
      );
      const result = await response.json();
      setWeatherData(result);
      const daytemp = result.forecast.forecastday[0].hour[9].temp_c;
      const nighttemp = result.forecast.forecastday[0].hour[22].temp_c;
      const daytext = result.forecast.forecastday[0].hour[9].condition.text;
      const nighttext = result.forecast.forecastday[0].hour[22].condition.text;
      const selCity = result.location.name;
      setCity(selCity);

      if (daytext === "sunny") {
        setIcon("sun.png"); //sun
      } else if (
        daytext === "Partly Cloudly" ||
        daytext === "Cloudy" ||
        daytext === "Overcast" ||
        daytext === "Fog" ||
        daytext === "Freezing fog"
      ) {
        setIcon("sunClouds.png");
      } else if (daytext === "Blowing snow" || daytext === "Blizzard") {
        setIcon("sunWind.png");
      } else if (
        daytext === "Patchy rain possible" ||
        daytext === "Patchy freezing drizzle possible" ||
        daytext === "Patchy light drizzle" ||
        daytext === "Light drizzle" ||
        daytext === "Freezing drizzle" ||
        daytext === "Heavy freezing drizzle" ||
        daytext === "Patchy light rain" ||
        daytext === "Light rain" ||
        daytext === "Moderate rain at times" ||
        daytext === "Moderate rain" ||
        daytext === "Heavy rain at times" ||
        daytext === "Heavy rain" ||
        daytext === "Light freezing rain" ||
        daytext === "Moderate or heavy freezing rain" ||
        daytext === "Light rain shower" ||
        daytext === "Moderate or heavy rain shower" ||
        daytext === "Patchy rain nearby" ||
        daytext === "Torrential rain shower"
      ) {
        setIcon("sunRain.png");
      } else if (
        daytext === "Patchy snow possible" ||
        daytext === "Patchy sleet possible" ||
        daytext === "Light sleet" ||
        daytext === "Moderate or heavy sleet" ||
        daytext === "Patchy light snow" ||
        daytext === "Light snow" ||
        daytext === "Patchy moderate snow" ||
        daytext === "Moderate snow" ||
        daytext === "Patchy heavy snow" ||
        daytext === "Heavy snow" ||
        daytext === "Ice pellets" ||
        daytext === "Light sleet showers" ||
        daytext === "Moderate or heavy sleet showers" ||
        daytext === "Light snow showers" ||
        daytext === "Moderate or heavy snow showers" ||
        daytext === "Light showers og ice pellets" ||
        daytext === "Moderate or heavy showers of ice pellets"
      ) {
        setIcon("snow.png");
      } else if (
        daytext === "Thundery outbreaks possible" ||
        daytext === "Patchy light rain with thunder" ||
        daytext === "Moderate or heavy rain with thunder" ||
        daytext === "Patchy light snow with thunder" ||
        daytext === "Moderate or heavy snow with thunder"
      ) {
        setIcon("Storm.png");
      }

      setDaytext(daytext);
      setnighttext(nighttext);
      setDaytemp(daytemp);
      setNightTemp(nighttemp);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getWeatherImage = () => {
    const conditionText =
      weatherData?.forecast?.forecastday?.[0]?.day?.condition?.text || "";

    // Нарны зураг
    if (conditionText.toLowerCase().includes("sunny")) {
      return "sun.png"; // Нарны зураг
    }
    // Үүлэн болон Бүрхүүлтэй туман
    else if (
      conditionText.toLowerCase().includes("cloud") ||
      conditionText.toLowerCase().includes("overcast") ||
      conditionText.toLowerCase().includes("fog")
    ) {
      return "sunClouds.png"; // Үүлтэй, бүрхүүлтэй туман
    }
    // Бороо
    else if (conditionText.toLowerCase().includes("rain")) {
      return "sunRain.png"; // Бороо
    }
    // Цас, Салхи
    else if (
      conditionText.toLowerCase().includes("snow") ||
      conditionText.toLowerCase().includes("sleet") ||
      conditionText.toLowerCase().includes("freezing")
    ) {
      return "snow.png"; // Цас
    }
    // Тунадас
    else if (
      conditionText.toLowerCase().includes("Storm") ||
      conditionText.toLowerCase().includes("Storm")
    ) {
      return "Storm.png"; // Тунадас
    }
    // Салхи
    else if (conditionText.toLowerCase().includes("wind")) {
      return "sunWind.png"; // Салхи
    }
    // Хэрэв ямар ч тохиролцоогүй бол
    else {
      return "Default.png"; // Үндсэн зураг (есдүгээр зураг)
    }
  };

  const getWeatherNightImage = () => {
    // Нарны зураг
    if (nighttext.toLowerCase().includes("clear")) {
      return "moon.png"; // Нарны зураг
    }
    // Үүлэн болон Бүрхүүлтэй туман
    else if (
      nighttext.toLowerCase().includes("cloud") ||
      nighttext.toLowerCase().includes("overcast") ||
      nighttext.toLowerCase().includes("fog")
    ) {
      return "NightClouds.png"; // Үүлтэй, бүрхүүлтэй туман
    }
    // Бороо
    else if (nighttext.toLowerCase().includes("rain")) {
      console.log(nighttext);

      return "nightrain.png"; // Бороо
    }
    // Цас, Салхи
    else if (
      nighttext.toLowerCase().includes("snow") ||
      nighttext.toLowerCase().includes("sleet") ||
      nighttext.toLowerCase().includes("freezing")
    ) {
      return "NightSnow.png"; // Цас
    }
    // Тунадас
    else if (
      nighttext.toLowerCase().includes("storm") ||
      nighttext.toLowerCase().includes("storm")
    ) {
      return "NightStorm.png"; // Тунадас
    }
    // Салхи
    else if (nighttext.toLowerCase().includes("wind")) {
      return "NightWind.png"; // Салхи
    }
    // Хэрэв ямар ч тохиролцоогүй бол
    else {
      return "Default.png"; // Үндсэн зураг
    }
  };

  

  useEffect(() => {
    getWeatherData();
  }, [selectedCity]);
  

  return (
    <>
      <div className=" w-full  h-[1200px] w-[2200px] justify-center items-center flex">
        <Searchbar
          setSelectedCity={setSelectedCity}
        />
        <div className=" bg-slate-50 h-full w-1/2 flex justify-center items-center flex-col relative">
          <img
            src="./oran.png"
            className="absolute  top-[-48px]  top-[177px] left-[300px] flex items-center"
          />
          <Day
            daytext={daytext}
            city={city}
            dayTemp={dayTemp}
            getWeatherImage={getWeatherImage}
          />
        </div>
        <div className=" h-full w-1/2 bg-slate-900  flex justify-center items-center">
          <img src="dark.png" className="absolute top-[955px] right-[300px]" />
          <Night
            nighttext={nighttext}
            city={city}
            nightTemp={nightTemp}
            getWeatherNightImage={getWeatherNightImage}
          />
        </div>
      </div>

      <Circles />
    </>
  );
}
console.log(countriesData);
export default App;

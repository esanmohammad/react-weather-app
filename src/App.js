import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import cities from "./assets/json/cities-fr.json";
import CityList from "./components/cityList/CityList";
import { useFetchData } from "./utils/helper";
import WeatherData from "./components/weatherData/WeatherData";

function App() {
  const [long, setLong] = useState(cities[0].lon);
  const [lat, setLat] = useState(cities[0].lat);
  const [hidden, setHidden] = useState(true);
  const [city, setCity] = useState("");
  const [startOffset, setStartOffset] = useState(0);
  const [offset, setOffset] = useState(10);
  const [disablePrevious, setDisablePrevious] = useState(true);
  const [disableNext, setDisbaleNext] = useState(false);
  const [searchedCities, setSearchedCities] = useState([...cities]);
  const [loading, weatherData] = useFetchData({ long, lat });
  const handleSelect = (long) => {
    setLong(long.split(" ")[1]);
    setLat(long.split(" ")[0]);
    setHidden(true);
    setCity("");
  };

  const handlePreviousClick = () => {
    let newOffsetRemainder = offset % 10;

    let newOffSet =
      offset - newOffsetRemainder - 10 < 0
        ? 10
        : offset - newOffsetRemainder - 10;
    if (newOffsetRemainder) {
      newOffSet = offset - newOffsetRemainder;
    }
    let newStartOffet = newOffSet - 10 < 0 ? 0 : newOffSet - 10;

    if (newStartOffet === 0) {
      //disable previous
      setDisablePrevious(true);
    }
    setStartOffset(newStartOffet);
    setOffset(newOffSet);
    //enable next
    setDisbaleNext(false);
  };

  const handleNextClick = () => {
    let newStartOffet = startOffset + 10;
    let newOffSet =
      offset + 10 > searchedCities.length ? searchedCities.length : offset + 10;
    if (newOffSet === searchedCities.length) {
      //disable next
      setDisbaleNext(true);
    }
    setOffset(newOffSet);
    setStartOffset(newStartOffet);
    //enable previous
    setDisablePrevious(false);
  };

  useEffect(() => {
    if (city) {
      setHidden(false);
      let filterCities = cities.filter((item) => item.nm.includes(city));
      setSearchedCities(filterCities);
      if (filterCities.length <= 10) {
        setDisbaleNext(true);
      }
    } else {
      setHidden(true);
      setSearchedCities(cities);
      setDisablePrevious(true);
      setDisbaleNext(false);
    }

    setStartOffset(0);
    setOffset(10);
  }, [city]);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ backgroundColor: "#777778", height: "100%" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "0",
            paddingTop: "10px",
            height: "50px",
          }}>
          {" "}
          Weather APP
        </h1>
      </header>
      <div className="container">
        <h2>Search your city</h2>
        <input
          style={{
            width: "200px",
            height: "30px",
            borderRadius: "16px",
          }}
          data-testid="city-input"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {!hidden && (
          <CityList
            searchedCities={searchedCities}
            startOffset={startOffset}
            offset={offset}
            handleNextClick={handleNextClick}
            handlePreviousClick={handlePreviousClick}
            handleSelect={handleSelect}
            disableNext={disableNext}
            disablePrevious={disablePrevious}
          />
        )}
        {hidden &&
          (loading ? (
            <>
              <div className="custom-loader"></div>
              <h2>Loading weather</h2>
            </>
          ) : (
            weatherData && <WeatherData weatherData={weatherData} />
          ))}
      </div>
    </div>
  );
}

export default App;

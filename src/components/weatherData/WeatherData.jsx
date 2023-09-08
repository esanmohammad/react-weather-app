import React from "react";
import "../../weathericons.css";
import {
  dayAfterTomorrow,
  getIconClass,
  thirdDay,
  tomorrow,
} from "../../utils/helper";

export default function WeatherData(props) {
  const { weatherData } = props;
  return (
    <>
      <div>
        <h3>{weatherData?.city.name}</h3>
      </div>
      <div className={`wi ${getIconClass(weatherData?.list[0].weather)}`}></div>
      <div style={{ margin: "10px" }}>{weatherData?.list[0].main.temp} c</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "19rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h3>{tomorrow}</h3>
        <h3>{dayAfterTomorrow}</h3>
        <h3>{thirdDay}</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "25rem",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        {weatherData?.list.slice(1, 4).map((item) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{ alignSelf: "center" }}
              className={`wi ${getIconClass(item.weather)}`}></div>
            <h3 className="wi">Min: {item.main.temp_min} c</h3>
            <h3 className="wi">Max: {item.main.temp_max} c</h3>
          </div>
        ))}
      </div>
    </>
  );
}

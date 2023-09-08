import { useEffect, useState } from "react";

export const useFetchData = ({ long, lat }) => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (long && lat) {
      setLoading(true);
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&cnt=4&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((value) => value.json())
        .then((value) => {
          setWeatherData(value);
          setLoading(false);
        });
    }
  }, [long, lat]);
  return [loading, weatherData];
};

export const getIconClass = (weather) =>
  weather.map((item) => `wi-icon-${item.id}`).join(" ");

let baseDate = new Date();

let tomorrow = new Date();
tomorrow.setDate(baseDate.getDate() + 1);
tomorrow = tomorrow.toLocaleDateString("en", {
  weekday: "short",
});
let dayAfterTomorrow = new Date();
dayAfterTomorrow.setDate(baseDate.getDate() + 2);
dayAfterTomorrow = dayAfterTomorrow.toLocaleDateString("en", {
  weekday: "short",
});

let thirdDay = new Date();
thirdDay.setDate(baseDate.getDate() + 3);
thirdDay = thirdDay.toLocaleDateString("en", {
  weekday: "short",
});

export { tomorrow, dayAfterTomorrow, thirdDay };

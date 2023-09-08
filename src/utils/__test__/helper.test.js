import { useFetchData } from "../helper";
import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";

const weatherData = {
  cod: "200",
  message: 0,
  cnt: 4,
  list: [
    {
      dt: 1694001600,
      main: {
        temp: 27.93,
        feels_like: 28.37,
        temp_min: 27.93,
        temp_max: 30.72,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1017,
        humidity: 50,
        temp_kf: -2.79,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.28,
        deg: 56,
        gust: 2.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-06 12:00:00",
    },
    {
      dt: 1694012400,
      main: {
        temp: 29.82,
        feels_like: 30.22,
        temp_min: 29.82,
        temp_max: 31.47,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1016,
        humidity: 46,
        temp_kf: -1.65,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.99,
        deg: 46,
        gust: 2.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-06 15:00:00",
    },
    {
      dt: 1694023200,
      main: {
        temp: 25.72,
        feels_like: 25.99,
        temp_min: 25.72,
        temp_max: 25.72,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1016,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.94,
        deg: 41,
        gust: 1.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-09-06 18:00:00",
    },
    {
      dt: 1694034000,
      main: {
        temp: 22,
        feels_like: 21.87,
        temp_min: 22,
        temp_max: 22,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 38,
      },
      wind: {
        speed: 2.45,
        deg: 113,
        gust: 2.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-09-06 21:00:00",
    },
  ],
  city: {
    id: 3038789,
    name: "Abbeville",
    coord: {
      lat: 50.1,
      lon: 1.8333,
    },
    country: "FR",
    population: 26461,
    timezone: 7200,
    sunrise: 1693977270,
    sunset: 1694024896,
  },
};
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(weatherData),
  })
);
describe("Testing custom hook", () => {
  test("useFetch hook test", async () => {
    const { result } = renderHook(() =>
      useFetchData({ long: "123", lat: "123" })
    );
    expect(result).toBeDefined();
  });
});

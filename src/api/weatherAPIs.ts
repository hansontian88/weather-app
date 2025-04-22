import { CITY_MAP } from '../constants/cityMap';
import { WEEKDAYS } from '../constants/weekdays';
import { CityCoordinates, WeatherResponse } from '../types';

//获得城市搜索名称
const normalizeCityName = (city: string): string => {
  const normalizedCity = city.trim().toLowerCase();

  return CITY_MAP[normalizedCity] ?? city;
};

//获取日期对应星期
function getWeekday(dateStr: string): string {
  const date = new Date(dateStr);

  return WEEKDAYS[date.getDay()];
}

//获取URL所需经纬度参数
const fetchCityCoordinates = async (
  city: string
): Promise<CityCoordinates | null> => {
  try {
    const cityName = normalizeCityName(city);

    if (!cityName.length) {
      return null;
    }

    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        cityName
      )}&count=1`
    );

    if (!response.ok) {
      throw new Error(`获取城市失败 - ${response.status}`);
    }

    const data = await response.json();

    if (!data.results || !data.results.length) {
      window.alert('没有找到该城市');

      return null;
    }

    const res = data.results[0];

    return {
      lat: res.latitude,
      lng: res.longitude,
    };
  } catch (e) {
    console.log(e);

    return null;
  }
};

//获取天气
export const fetchWeather = async (
  city: string
): Promise<WeatherResponse | null> => {
  try {
    const coordinates = await fetchCityCoordinates(city);

    if (!coordinates) {
      return null;
    }

    const { lat, lng } = coordinates;

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia%2FShanghai`
    );

    if (!response.ok) {
      throw new Error(`获取天气失败 - ${response.status}`);
    }

    const data = await response.json();

    if (!data.daily || !Object.keys(data.daily).length) {
      throw new Error(`获取天气失败 - ${response.status}`);
    }

    const {
      temperature_2m_max = [],
      temperature_2m_min = [],
      time = [],
      weathercode = [],
    } = data.daily;
    const weatherList = time.map((date: string, index: number) => ({
      date: getWeekday(date),
      temperature_max: temperature_2m_max[index],
      temperature_min: temperature_2m_min[index],
      weatherCode: weathercode[index],
    }));

    return {
      city,
      forcast: weatherList,
    };
  } catch (e) {
    console.log(e);

    return null;
  }
};

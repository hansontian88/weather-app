import { useEffect, useState } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';
import SearchForCity from './SearchForCity';
import { fetchWeather } from './api/weatherAPIs';
import { WeatherResponse } from './types';

function App() {
  const [city, setCity] = useState('上海');
  const [weatherList, setWeatherList] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    //获取天气列表
    const fetchWeatherList = async () => {
      const dataList = await fetchWeather(city);

      if (!dataList) {
        return;
      }

      setWeatherList(dataList);
    };

    fetchWeatherList();
  }, [city]);

  return (
    <div className='app-container'>
      <SearchForCity setCity={setCity} />
      {weatherList ? (
        <WeatherDisplay weatherList={weatherList} />
      ) : (
        <div>查询中...</div>
      )}
    </div>
  );
}

export default App;

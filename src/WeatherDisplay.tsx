import { WEATHER_CODE_MAP } from './constants/weatherCodeMap';
import { WeatherResponse } from './types';

interface Props {
  weatherList: WeatherResponse;
}

//天气预报展示
const WeatherDisplay = ({ weatherList }: Props) => (
  <div className='display-wrapper'>
    {weatherList.forcast.map((day) => {
      const { date, weatherCode, temperature_min, temperature_max } = day;
      const { text, icon } = WEATHER_CODE_MAP[weatherCode] || {
        text: '未知',
        icon: './assets/default_weather_icon.svg',
      };

      return (
        <div key={date} className='display-item'>
          <div className='date'>{date}</div>
          <img src={icon} alt={text} className='weather-icon' />
          <div className='weather-code'>{text}</div>
          <div className='temperature'>
            {temperature_min}°C ~ {temperature_max}
          </div>
        </div>
      );
    })}
  </div>
);

export default WeatherDisplay;

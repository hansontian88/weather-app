export interface CityCoordinates {
  lat: number;
  lng: number;
}

interface DailyWeather {
  date: string;
  temperature_max: number;
  temperature_min: number;
  weatherCode: number;
}

export interface WeatherResponse {
  city: string;
  forcast: DailyWeather[];
}

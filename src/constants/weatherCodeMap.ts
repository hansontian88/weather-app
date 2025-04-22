import sunnyIcon from '../assets/sunny_icon.svg';
import rainyIcon from '../assets/rainy_icon.svg';
import cloudyIcon from '../assets/cloudy_icon.svg';
import fogIcon from '../assets/fog_icon.svg';
import snowIcon from '../assets/snow_icon.svg';
import stormIcon from '../assets/lightning_storm_icon.svg';

//天气编码对应的天气和图标
export const WEATHER_CODE_MAP: Record<number, { text: string; icon: string }> =
  {
    0: { text: '晴', icon: sunnyIcon },
    1: { text: '少云', icon: cloudyIcon },
    2: { text: '多云', icon: cloudyIcon },
    3: { text: '阴天', icon: cloudyIcon },
    4: { text: '雷阵雨', icon: rainyIcon },
    5: { text: '阵雨伴有冰雹', icon: rainyIcon },
    6: { text: '雨夹雪', icon: rainyIcon },
    10: { text: '暴雨', icon: rainyIcon },
    11: { text: '大暴雨', icon: rainyIcon },
    12: { text: '特大暴雨', icon: rainyIcon },
    45: { text: '雾', icon: fogIcon },
    48: { text: '冻雾', icon: fogIcon },
    51: { text: '毛毛雨', icon: rainyIcon },
    53: { text: '毛毛雨', icon: rainyIcon },
    55: { text: '毛毛雨', icon: rainyIcon },
    56: { text: '冻毛毛雨', icon: rainyIcon },
    57: { text: '冻毛毛雨', icon: rainyIcon },
    61: { text: '小雨', icon: rainyIcon },
    63: { text: '中雨', icon: rainyIcon },
    65: { text: '大雨', icon: rainyIcon },
    66: { text: '冻雨', icon: rainyIcon },
    67: { text: '冻雨', icon: rainyIcon },
    71: { text: '小雪', icon: snowIcon },
    73: { text: '中雪', icon: snowIcon },
    75: { text: '大雪', icon: snowIcon },
    77: { text: '雪粒', icon: snowIcon },
    80: { text: '小阵雨', icon: rainyIcon },
    81: { text: '阵雨', icon: rainyIcon },
    82: { text: '强阵雨', icon: rainyIcon },
    85: { text: '小阵雪', icon: snowIcon },
    86: { text: '阵雪', icon: snowIcon },
    95: { text: '雷雨', icon: stormIcon },
    96: { text: '雷雨伴有冰雹', icon: stormIcon },
    99: { text: '雷雨伴有冰雹', icon: stormIcon },
  };

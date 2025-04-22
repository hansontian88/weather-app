import { useState } from 'react';

interface Props {
  setCity: (city: string) => void;
}

//搜索城市
const SearchForCity = ({ setCity }: Props) => {
  const [value, setValue] = useState('上海');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCity(value.trim());
    }
  };

  return (
    <input
      type='text'
      value={value}
      className='search-input'
      placeholder='请输入城市'
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchForCity;

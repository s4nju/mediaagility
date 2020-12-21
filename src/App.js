import { useEffect, useState } from 'react';
import getDataFromAPI from './utils/fetchData';
import Item from './Components/WeatherItem/Item';
import SearchBar from './Components/SearchBar/SearchBar';
import './App.css';
import ToggleButton from './Components/PaginationButton/ToggleButton';

function App() {
  let [data, setData] = useState([])
  let [searchQuery, setSearchQuery] = useState('')
  let [searchList, setSearchList] = useState([])
  let [currentPage, setCurrentPage] = useState(0);
  let [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    getDataFromAPI().then(response => {
      setData(response)
      setTotalPages(Math.ceil(response.length / 5));
    });
  }, [])
  useEffect(() => {
    let temp = searchQuery && data.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()))
    if (temp) {
      setSearchList(temp);
    } else {
      setSearchList([])
    }
  }, [searchQuery])
  function handleSort() {
    let tempData = [...data];
    tempData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    setData(tempData);
  }
  console.log(data);
  return (
    <div className="App">
      <SearchBar
        setSearchQuery={setSearchQuery}
      />
      <button className='sort-btn' onClick={handleSort}>Sort</button>
      {searchList.length > 0 || searchQuery.length > 0 ?
        searchList.map(city =>
          <Item
            key={city.id}
            date={city.dt}
            feelLike={city.main.feels_like}
            humidity={city.main.humidity}
            pressure={city.main.pressure}
            currentTemp={city.main.temp}
            maxTemp={city.main.temp_max}
            minTemp={city.main.temp_min}
            sunrise={city.sys.sunrise}
            sunset={city.sys.sunset}
            windSpeed={city.wind.speed}
            cityName={city.name}
            clouds={city.clouds.all}
            icon={city.weather[0].icon}
            description={city.weather[0].main}
          ></Item>).slice(currentPage * 5, (currentPage + 1) * 5) :
        (data.map(city =>
          <Item
            key={city.id}
            date={city.dt}
            feelLike={city.main.feels_like}
            humidity={city.main.humidity}
            pressure={city.main.pressure}
            currentTemp={city.main.temp}
            maxTemp={city.main.temp_max}
            minTemp={city.main.temp_min}
            sunrise={city.sys.sunrise}
            sunset={city.sys.sunset}
            windSpeed={city.wind.speed}
            cityName={city.name}
            clouds={city.clouds.all}
            icon={city.weather[0].icon}
            description={city.weather[0].main}
          ></Item>
        ).slice(currentPage * 5, (currentPage + 1) * 5))}
      <ToggleButton setCurrentPage={setCurrentPage} value={totalPages} />
    </div>
  );
}

export default App;

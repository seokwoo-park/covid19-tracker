import React,{useEffect,useState} from 'react';
import { Cards,Chart,CountryPicker } from './components/index';
import styles from './App.module.css';
import { fetchData } from './api';


function App() {

  const [data, setData] = useState({})
  const [currentCountry, setCurrentCountry] = useState('')

  useEffect( async () => {
    const fetchDataAPI = async () => {
      setData(await fetchData())
    }

    fetchDataAPI();
    
  }, [])

  const handleCountryChange = async (country) => {

    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCurrentCountry(country)
    console.log(fetchedData)
  }
  
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart data={data} currentCountry={currentCountry}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
    </div>
  );
}

export default App;

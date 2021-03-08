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
    console.log(country)
  }

  return (
    <div className={styles.container}>
      <Cards data={data} handleCountryChange={handleCountryChange}/>
      <Chart/>
      <CountryPicker/>
    </div>
  );
}

export default App;

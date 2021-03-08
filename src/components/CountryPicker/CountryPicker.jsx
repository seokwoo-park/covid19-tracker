import React,{useState, useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api'

function CountryPicker({handleCountryChange}) {

    const [countryList,setCountryList] = useState([]);

    useEffect(()=>{
        const fetchCountryAPI = async () => {
            setCountryList(await fetchCountries())
        }

        fetchCountryAPI()
    },[setCountryList])

    console.log(countryList)
    console.log(handleCountryChange)
    // countryList.map((a,i)=>{console.log(a)})

    return (
        <FormControl className={styles.container}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="global">Global</option>
                {
                countryList.map((country,i)=>{
                    return <option key={i} value={country}>{country}</option>
                })
                }
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker

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

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value="">Global</option>
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

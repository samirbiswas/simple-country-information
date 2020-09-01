import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Details from '../Details/Details';

const CountryDetails = () => {
    const {nameId} = useParams();
    const [countries, setCountries] = useState([]);
    //console.log(countries);
    useEffect(()=>{    
        fetch(`https://restcountries.eu/rest/v2/name/${nameId}`)
        .then(res=>res.json())
        .then(data=>setCountries(data))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div>
            {countries.map(cr=> <Details key={cr.alpha3Code} cry={cr}></Details>)} 
        </div>
    );
};

export default CountryDetails;
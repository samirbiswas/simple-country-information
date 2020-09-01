import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import { Row } from 'react-bootstrap';

const Home = () => {
    const [country, SetCountry] = useState([]);
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/all`)
        .then(res=>res.json())
        .then(data=> SetCountry(data))
    },[])

    return (
        <div className="row">
            <div className="col-md-8">
           
           {
               country.slice(0,20).map(cr=> <Country key={cr.alpha3Code} country={cr}></Country>)
           }
           </div>
        </div>
    );
};

export default Home;
import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, population, flags, region} = props.country
    return (
        <div className='divs'>
            <h1>Name: {name.common}</h1>
            <h4>Population: {population}</h4>
            <h4>Region: {region}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;
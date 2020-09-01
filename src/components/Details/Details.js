import React from 'react';

const Details = (props) => {
   
    return (
        <div>
            <h3>Country :{props.cry.name}</h3>
           <h3>Capital :{props.cry.capital}</h3>
        </div>
    );
};

export default Details;
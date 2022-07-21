import React, { useState } from 'react';

const SearchWeathers = (props) => {


    function Weathers(){

        console.log(props.weathers);

        let filteredWeathers = props.weathers.filter(climateSearches => climateSearches.details);

        let searchWeathers = filteredWeathers.map(weather => {
            
        });
    }
    const [weather, setWeather] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let searchforWeathers = {
            weather: weather,
        };
        console.log(searchforWeathers);
        props.SearchWeathers(searchforWeathers)
    }
    return ( 
        <div className='form=group'>
            <form onSubmit={handleSubmit}>
                <label>Search for Weather</label>
                <input type="text" value={weather} className="for-control" onChange={(event) => setWeather(event.target.value)}/>
                <button type='Submit' className ="btn btn-primary">Search</button>
            </form>
            <tbody>

                {props.weathers.map((SearchWeathers, index) => {
                    return (

                        <tr key={index}>

                        </tr>
                    );
                })}
            </tbody>

        </div>


     );
}
 
export default SearchWeathers;
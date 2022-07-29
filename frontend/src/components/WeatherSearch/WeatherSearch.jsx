import React, { useState } from 'react';

const WeatherSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filterWeather_Type, setFilteredWeather_Type] = useState([])

    const triggerSearch = () => {

        let results = props.colleges.filter((college) => {
            if (college.weather_type.includes(searchTerm)) {

                return true;
            }
        })
        setFilteredWeather_Type(results)
    }
    return ( 
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Search Weather</button>

            {filterWeather_Type.map(el => <div>{el.University}</div>)}
        </div>
     );
}
export default WeatherSearch;
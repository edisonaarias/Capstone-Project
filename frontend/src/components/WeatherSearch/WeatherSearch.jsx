import React, { useState } from 'react';

const WeatherSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filterWeathers, setFilteredWeathers] = useState([])

    const triggerSearch = () => {

        let results = props.colleges.filter((college) => {
            if (college.weathers.includes(searchTerm)) {

                return true;
            }
        })
        setFilteredWeathers(results)
    }
    return ( 
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Search Weather</button>

            {filterWeathers.map(el => <div>{el.weathers}</div>)}
        </div>
     );
}
 
export default WeatherSearch;
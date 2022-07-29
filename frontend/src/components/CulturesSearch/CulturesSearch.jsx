import React, { useState } from 'react';

const CulturesSearch = (props) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredCultures, setFilteredCultures] = useState([])

    const triggerSearch = () => {

        let results = props.colleges.filter((college) => {
            if (college.culture.includes(searchTerm)) {

                return true;
            }
        })
        setFilteredCultures(results)
    }
    return (  
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Search Culture</button>

            {filteredCultures.map(el => <div>{el.University}</div>)}
        </div>
    );
}
export default CulturesSearch;
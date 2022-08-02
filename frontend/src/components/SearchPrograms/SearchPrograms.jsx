import React, { useState } from 'react';

const SearchPrograms = (props) => {

        const [searchTerm, setSearchTerm] = useState('')
        const [filterPrograms, setFilteredPrograms] = useState([])

        const triggerSearch = () => {

            let results = props.colleges.filter((college) => {
                if (college.programs.includes(searchTerm)) {

                return true;
            }
        })
        setFilteredPrograms(results)
    }
    return ( 
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Search Programs</button>

            {filterPrograms.map(el => <div>{el.University}</div>)}
        </div>
    )
}
export default SearchPrograms;
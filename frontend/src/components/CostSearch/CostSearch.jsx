import React, { useState } from 'react';

const CostSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filterCosts, setFilteredCosts] = useState([])

    const triggerSearch = () => {

        let results = props.colleges.filter((college) => {
            if (college.costs.includes(searchTerm)) {

                return true;
            }
        })
        setFilteredCosts(results)
    }
    return ( 
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Cost Search</button>

            {filterCosts.map(el => <div>{el.costs}</div>)}
        </div>

     );
}
 
export default CostSearch;
import React, { useState } from 'react';

const CostSearch = (props) => {
    const [searchNumber, setSearchNumber] = useState('')
    const [filterCost, setFilterCost] = useState([])

    const colleges = [25217, 40000, 39000, 34499, 36949, 23126];

        const triggerSearch = () => {
            let results = colleges.filter(el => el.value < 100000)

        setFilterCost(results)
   
    }
    return ( 
        <div>
            <input value={searchNumber} onChange={(e) => setSearchNumber(e.target.value)}></input>
            <button onClick={triggerSearch}>Cost Search</button>
            {filterCost.map(el => <div>{el.University}</div>)}
        </div>

     );
}
 
export default CostSearch;
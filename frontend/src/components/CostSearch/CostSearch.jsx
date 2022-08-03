import React, { useReducer, useState } from 'react';

const CostSearch = (props) => {
    
    const [searchNumber, setSearchNumber] = useState('')
    const [filterCost, setFilterCost] = useState([])

    function getCollegeCost(){

        let costNumbers = props.colleges.filter(el => el.cost < searchNumber)

        console.log(costNumbers)

        setFilterCost(costNumbers)
}


    return ( 
        <div>
            <input value={searchNumber} onChange={(e) => setSearchNumber(e.target.value)}></input>
            <button onClick={getCollegeCost}>Cost Search</button>
            {filterCost.map(el => <div>{el.University}</div>)}
        </div>

     );
}
 
export default CostSearch;
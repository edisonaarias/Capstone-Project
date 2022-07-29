import React, { useState } from 'react';

const CostSearch = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filterCosts, setFilteredCosts] = useState([])

    const triggerSearch = () => {

        let results = props.colleges.filter((college) => {
       { const arr = [25217,25217,25217,39000,34499,36949,23126];

    const filter = arr.filter((number) => number < 100000);
    console.log(filter); 

                return true;
            }
        })
        setFilteredCosts(results)
    }
    return ( 
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Cost Search</button>

            {filterCosts.map(el => <div>{el.University}</div>)}
        </div>

     );
}
 
export default CostSearch;
import React, { useState } from 'react';

const BenefitsSearch = (props) => {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredColleges, setFilteredColleges] = useState([])

    const triggerSearch = () => {
        
        let results = props.colleges.filter((college) => {
            if (college.benefits.includes(searchTerm)) {
               
                return true;
            }
        })
        setFilteredColleges(results)
    }
    return (
        <div>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={triggerSearch}>Click Me</button> 

            {filteredColleges.map(el => <div>{el.University}</div>)}
        </div>
    )
}
export default BenefitsSearch;
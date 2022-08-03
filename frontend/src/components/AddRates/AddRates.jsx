import React, { useState } from 'react';


const AddRates = (props) => {

    const [rates, setRates] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        let newrating = {
            rate: rates,
        };
        console.log(newrating);
        props.parentEntriesProperty(newrating)
    }

    return ( 
        <from onSubmit={handleSubmit}>
            <label> Add Rating</label>
            <input type = "text" value={rates} onChange={(event) => setRates(event.target.value)}/>
            <button type='submit'>Add</button>
       </from>

     )
}
 
export default AddRates;
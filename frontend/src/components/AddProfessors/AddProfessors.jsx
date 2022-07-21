import React, { useState } from 'react';


const AddProfessors = (props) => {
    
    const [professors, setProfessor] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        let newteacher = {
            professor: professors,
        };
        console.log(newteacher);
        props.parentEntriesProperty(newteacher)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Professor</label>
            <input type = 'text' value={professors} onChange={(event) => setProfessor(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )
}
export default AddProfessors;
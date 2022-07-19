import React, { useState } from 'react';


const AddProfessors = (props) => {
    
    const [professor, setProfessor] = useState([0]);

    function handleSubmit(event) {
        event.preventDefuault();
        let newteacher = {
            professor: professor,
        };
        console.log(newteacher);
        props.parentEntriesProperty(newteacher)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Professor</label>
            <input type = 'text' value={professor} onChange={(event) => setProfessor(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddProfessors;
import React, { useState } from 'react';

const SearchPrograms = (props) => {


    function DontDoThat(){

        console.log(props.programs);

        let filterPrograms = props.programs.filter(schemeSearches => schemeSearches.details); 
    
        let SearchPrograms = filterPrograms.map(program => {

        });
    }
    const [program, setprogram] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
        let searchforPrograms = {
            program: program,
        };
        console.log(searchforPrograms);
        props.SearchPrograms(searchforPrograms)
    }
    return ( 
        <div onSubmit='form=group'>
            <form onSubmit={handleSubmit}>
                <label>Search for Program</label>
                <input type="text" value={program} className="for-control" onChange={(event) => setprogram(event.target.value)}/>
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
            <tbody>

                {props.programs.map((SearchPrograms, index) =>{
                  return (

                    <tr key={index}>

                    </tr>
                  );  
                })}
            </tbody>

        </div>
     );
}
 
export default SearchPrograms;
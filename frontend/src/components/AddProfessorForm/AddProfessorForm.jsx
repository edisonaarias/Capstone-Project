import React, { useState } from 'react';



const AddProfessorForm = (props) => {

    const [rates, setRates] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        let newrates = {
            rate: rates,
        };
        console.log(newrates);
        props.rates(newrates)
    }

  
  

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Rating</label>
            <input type = 'text' value={rates} onChange={(event) => setRates(event.target.value)}/>
            <button type='submit'>Add</button>
        </form>
           
            <div className='tableDiv'>
                <table>
                    <tr>
                        <th>Professor</th>
                        <th>Rate</th>
                        <th>review</th>
                    </tr>
                </table>
                ( 
        form.map(i => {
            return (<tr>
                <td>{i.name}</td>
                <td>{i.rate}</td>
                <td>{i.review}</td>
            </tr>)
            })
        )
    }
            </div>    
          
    )



export default AddProfessorForm;
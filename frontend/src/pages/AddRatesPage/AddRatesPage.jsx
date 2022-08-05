import React from 'react';
import { useNavigate } from 'react-router-dom';


import useAuth from "../../hooks/useAuth"
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios';

let initialValues = {
    Rates: "",
    id: "",
    professor:"",
};

const AddRatesPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues, 
        postNewRate
    );

    async function postNewRate(form){
        console.log(form)
        try{
            let response = await axios.post(
                "http://127.0.0.1:8000/api/rates/all/", 
                formData, 
                {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            }
           );
           console.log(response)
            navigate("/")
        } catch (error) {
            console.log(error.message);
        }
}

    return (
        <div>
             <form className="form" onSubmit={handleSubmit}>
                <label>
                    professor:{" "}
                    <input
                     type ="text"
                    name = "professor"
                    value={formData.Professor}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    id:{""}
                    <input
                    type ="text"
                    name= "id"
                    value={formData.id}
                    onChange={handleInputChange}
                    />
                </label>
              <label>
                Rates:{" "}
                <input
                type ="text"
                name="Rates"
                value={formData.Rates}
                onChange={handleInputChange}
                />
              </label>
              <button>Add Rates</button>
            </form>
        </div>
        );

}

export default AddRatesPage;

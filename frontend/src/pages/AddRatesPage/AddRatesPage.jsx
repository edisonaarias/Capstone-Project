import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from "../../hooks/useAuth"
import useCustomForm from '../../hooks/useCustomForm';


let initialValues = {
    rate: "",
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
                Rate:{" "}
                <input
                type ="text"
                name="rate"
                value={formData.rate}
                onChange={handleInputChange}
                />
              </label>
              <button>Add Rate</button>
            </form>
        </div>
        );

}

export default AddRatesPage;

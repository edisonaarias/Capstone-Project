import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';


import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';
import axios from 'axios'

let initialValues = {
    name: "",
    class_type:"",
    message: "", 
};

const AddProfessorPage = () => {
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(
        initialValues,
        postAddProfessor
    );    

    async function postAddProfessor(form){
      console.log(form)
      try {
          let response = await axios.post(
            "http://127.0.0.1:8000/api/professors/all/",
            form, 
            {
                headers: {
                    Authorization: 'Bearer ' + token
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
            Name:{""}
            <input
            type ="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            />
          </label>
          <label>
            Class_Type:{""}
            <input
            type ="text"
            name="class_type"
            value={formData.class}
            onChange={handleInputChange}
            />
          </label>
          <label>
            Message:{""}
            <input
            type ="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            />
          </label>
          <button>Add Professor</button>
        </form>
    </div>
    );

}

export default AddProfessorPage;
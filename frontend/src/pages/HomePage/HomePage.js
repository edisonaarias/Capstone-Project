import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


import axios from "axios";
import SearchWeathers from "../../components/SearchWeathers/SearchWeathers";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
import AddProfessors from "../../components/AddProfessors/AddProfessors";
import BenefitsSearch from "../../components/BenefitsSearch/BenefitsSearch";
import CulturesSearch from "../../components/CulturesSearch/CulturesSearch";


let initialValues = {
  name: "",
  class_type:"",
  message: "",
};

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [colleges, setColleges] = useState([]);
  const [professors, setProfessors] = useState([]);
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/colleges/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setColleges(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchColleges();
  }, [token]);

  useEffect (() => {
    const fetchProfessors = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/professors/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setProfessors(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchProfessors();
  }, [token]);


  const [weathers, setweathers] = useState([{University: "UNLV", Enviroment: "restaurnats", benefits: "discount programs", culture:"big party school", programs:"Hospitality", cost:"25217", weather_type:"Day Heat", mayor_type:"Psychology"}])

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <Link to="/addprofessor">Add Professor</Link>

      {professors &&
        professors.map((professors) => (
          <p key={professors.id}>
            {professors.name} {professors.class_type} {professors.message}
            <BenefitsSearch colleges={colleges}/>
            <CulturesSearch colleges={colleges}/>
         
          </p>
        ))}
    </div>
  );
};

export default HomePage;

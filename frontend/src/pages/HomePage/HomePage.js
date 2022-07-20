import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";


import axios from "axios";
import SearchWeathers from "../../components/SearchWeathers/SearchWeathers";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [colleges, setColleges] = useState([]);

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

  const [weathers, setweathers] = useState([{University: "UNLV", Enviroment: "restaurnats", benefits: "discount programs", culture:"big party school", programs:"Hospitality", cost:"25217", weather_type:"Day Heat", mayor_type:"Psychology"}])

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {colleges &&
        colleges.map((college) => (
          <p key={college.id}>
      
          </p>
        ))}
    </div>
  );
};

export default HomePage;

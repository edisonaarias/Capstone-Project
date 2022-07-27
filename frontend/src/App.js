// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddProfessors from "./components/AddProfessors/AddProfessors";
import SearchWeathers from "./components/SearchWeathers/SearchWeathers";
import CollegeTable from "./components/CollegeTable/CollegeTable";
import SearchPrograms from "./components/SearchPrograms/SearchPrograms"
import AddProfessorForm from "./components/AddProfessorForm/AddProfessorForm";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";
import AddProfessorPage from "./pages/AddProfessor/AddProfessor";
import BenefitsSearch from "./components/BenefitsSearch/BenefitsSearch";

function App() {

  const [colleges, setColleges] = useState([{University:"UNLV",enviorment:"restaurants",Professor:"Baldwin",benefits:"discount programs", culture:"big party school", programs:"Hospitality administration", cost:"25217", weather_type:"dry heat", mayor_type:"Psychology"}]); 
  const [weathers, setWeathers]= useState([]);
  const [programs, setPrograms]= useState([]);
  const [rates, setRates] = useState([]);


useEffect(() => {
  // getSearchWeathers();
}, []);


  const [teachers, setTeachers] = useState([{Professor: "Baldwin"}])

  function NewProfessors(teacher){

    let tempTeachers = [teachers, ...teacher];


    setTeachers(tempTeachers);
  }

  return (
    <div>

      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage> 
                
              </HomePage> 
              <CollegeTable colleges={colleges}/>
              <AddProfessors />
              <SearchWeathers weathers={weathers}/>
              <SearchPrograms programs ={programs}/>
              {/* <AddProfessorForm rates={rates}/> */}
            </PrivateRoute>
            
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/addprofessor"
          element={
          <PrivateRoute>
            <AddProfessorPage />
            <BenefitsSearch benefits={colleges}/>
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

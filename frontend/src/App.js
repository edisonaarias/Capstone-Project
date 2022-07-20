// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddProfessors from "./components/AddProfessors/AddProfessors";
import SearchWeathers from "./components/SearchWeathers/SearchWeathers";
import DisplayColleges from "./components/DisplayColleges/DisplayColleges";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

function App() {

  const [colleges, setColleges] = useState([]);
  const [weathers, SearchWeathers]= useState([]);

useEffect(() => {
  // getSearchWeathers();
}, []);


  const [teachers, setTeachers] = useState([{Professor: "Dr.Clark"}])

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
              <AddProfessors parentEntriesProperty={NewProfessors} />
              {/* <SearchWeathers climateSearches={getSearchWeathers}/> */}
              <DisplayColleges parentColleges={colleges}/>
            </PrivateRoute>
            
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;

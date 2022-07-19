// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddProfessors from "./components/AddProfessors/AddProfessors";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [teachers, setTeachers] = useState([{Professor: "Dr.Clark"}])

  function AddNewProfessors(teacher){

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
                <AddNewProfessors parentEntriesProperty={AddNewProfessors}/>
              </HomePage> 
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

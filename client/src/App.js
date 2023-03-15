import logo from "./logo.svg";
import "./App.css";

import  Profile  from "./pages/Profile";
import  CreateRoutine  from "./pages/CreateRoutine";
import  RoutineLogg  from "./pages/RoutineLogg";

import NavBar from "./components/NavBar";

import { useState } from "react";


function App() {
  const [
    currentPage,
    setCurrentPage,
  ] = useState("Profile");
  const renderPage = () => {
    switch (currentPage) {
      case "Profile":
        return <Profile />
     
      case "Create Routine":
        return <CreateRoutine />
       
      case "Routine Logg":
        return <RoutineLogg />
      
      default:
        return <p>
          error
        </p>;
    }
  };

  return (
 
    <div className="App">
     
        <NavBar
          setCurrentPage={
            setCurrentPage
          }
        />
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1 className="text-3xl font-bold underline font-brand">
          Hello world!
        </h1>
  
        <div>
          {renderPage()}
          </div>
  
      </div>
   
  );
}

export default App;


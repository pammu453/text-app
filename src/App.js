import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About"/>
      <Textform title="Enter the text here"/> */}
      {/* <AboutUs/> */}
      <Router>
        <Navbar title="TextUtils" aboutText="About"/>
        <div className='container my-3'>
          <Routes>
            <Route path="/About" element={<AboutUs/>}/>
            <Route path="/" element={<Textform title="Enter the text here"/> }/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


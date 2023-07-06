import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {

  // document.getElementsByName("textarea").style.backgroundColor="red";

  const [mode,changeMode]=useState("white");
  const [,afText]=useState(null);
  const [white,dark]=useState("Enable Dark mode");


  let change=()=>{
    if(mode==="white"){
      changeMode(document.body.style.backgroundColor="#2f415b");
      afText(document.body.style.color="white");
      dark("Enable White mode");
      // document.title="TextUtil-DarkMode";

      //just to make destaction in the website such as go fot this website ,virus has been attacked
      // setInterval(()=>{
      //  document.title="Please go for ths link";
      // },3000)
      // setInterval(()=>{
      //  document.title="Downlod this";
      // },4000)
      // setInterval(()=>{
      //  document.title="Virus has been attacked";
      // },5000)
    }
    else{
      changeMode(document.body.style.backgroundColor="white");
      afText(document.body.style.color="black");
      dark("Enable dark mode");
      // document.title="TextUtil-WhiteMode";
    }
  }

  let changeColor=()=>{
    let x=document.getElementById("picColor").value;
    document.body.style.backgroundColor=x;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
   
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/About">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
             <button type="button" className="btn btn-secondary btn-sm my-2 " onClick={change}>{white}</button>
            </li>
            <li className="nav-item">
             <input type="color" name="" className="m-2" id="picColor" onChange={changeColor}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}


// Navbar.defaultProps={
//     title:"Title Here",
//     aboutText:"About here"
// }


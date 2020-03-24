import React  from 'react';
import { Link } from 'react-router-dom';

import { FaGooglePlay } from "react-icons/fa";

import { GiEgyptianTemple } from "react-icons/gi";

import "./NavBar.css";




const NavBar = (props) => {

 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div className="container">
    <Link className="navbar-brand" href="#"><span className="span"><GiEgyptianTemple /> TOOT <GiEgyptianTemple /></span></Link>
    <button 
    className="navbar-toggler"
     type="button"
      data-toggle="collapse"
       data-target="#navbarResponsive"
        aria-controls="navbarResponsive" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link " to="/"><span>Home</span>
                <span className="sr-only">(current)</span>
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About"> <span>About</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services"><span>Services</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact"><span>Contact</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<header className="masthead">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
        <h1 className="font-weight-bold welcome">Welcome To Egypt</h1>
        <p className="lead font-weight-bold">Download our app to be able to learn more about our history</p>
        <button type="button" className="btn btn-outline-warning btn-lg colorbtn" >Download TOOT App Now !!</button>
        <div className="text">Available Now On Google Play <FaGooglePlay /></div>
        
      </div>
    </div>
  </div>
</header>
    
</div>
  );
}

export {NavBar};
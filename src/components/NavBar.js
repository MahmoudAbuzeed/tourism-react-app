import React  from 'react';
import { Link } from 'react-router-dom';



import { GiEgyptianTemple } from "react-icons/gi";

import "./NavBar.css";




const NavBar = (props) => {


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
  <div className="container">
    <Link className="navbar-brand" href="#"><span><GiEgyptianTemple /> TOOT <GiEgyptianTemple /></span></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home
                <span className="sr-only">(current)</span>
              </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
</div>
  );
}

export {NavBar};
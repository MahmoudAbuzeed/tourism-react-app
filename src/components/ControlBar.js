
import React, { Component } from 'react';
import { Container, ButtonGroup, Button  } from 'reactstrap';
import {Link} from 'react-router-dom';


import "./ControlBar.css";



class ControlBar extends Component {
  render(){
    return ( 
    <div>
      <Container className="themed-container  text-center"  fluid={true}>
        <div className="monument"> 
       

      <ButtonGroup>
      <Link className="removeLine" to="/monuments">
      <Button className="dark" >
            <span>Monuments</span>
      </Button>
      </Link>
      <Link className="removeLine" to="/monumentImages">
      <Button className="dark" >
            <span>Monument Images</span>
      </Button>
      </Link>
      <Link className="removeLine" to="/Category">
      <Button className="dark" >
            <span>Category</span>
      </Button>
      </Link>
      <Link className="removeLine" to="/placescat">
      <Button className="dark" >
            <span>Places Cat</span>
      </Button>
      </Link>
      <Link className="removeLine" to="/places">
      <Button className="dark" >
            <span>Places</span>
      </Button>
      </Link>
      <Link className="removeLine" to="/placeImages">
      <Button className="dark" >
            <span>Place Images</span>
      </Button>
      </Link>
      
    </ButtonGroup>

      
      
    </div>
    </Container>
      



   
      </div>
    )
  }
}






      export  {ControlBar};
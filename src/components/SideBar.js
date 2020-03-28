
import React, { Component } from 'react';
import { ListGroup, ListGroupItem , Container } from 'reactstrap';
import {Link} from 'react-router-dom';


import "./SideBar.css";



class SideBar extends Component {
  render(){
    return ( 
    <div>
      <Container className="themed-container removeLine"  fluid={true}>
        <div className="monument"> 
       <ListGroup>
         <Link className="removeLine" to="/monuments">
        <ListGroupItem className="dark" tag="a"  action><span>Monuments</span></ListGroupItem>
        </Link>
        <Link to="monumentImages">
        <ListGroupItem className="dark" tag="a"  action><span>Monument Images</span></ListGroupItem>
        </Link>
        <Link to="Category">
        <ListGroupItem className="dark" tag="a"  action><span>Catagory</span></ListGroupItem>
        </Link>
        <Link to="placescat">
        <ListGroupItem className="dark" tag="a"  action><span>Places cat</span></ListGroupItem>
        </Link>
        <Link to="places">
        <ListGroupItem className="dark" tag="a"  action><span>Places</span></ListGroupItem>
        </Link>
        <Link to="placeImages">
        <ListGroupItem className="dark"   action><span>Place Images</span></ListGroupItem>
        </Link>
      </ListGroup>
      
    </div>
    </Container>
      



   
      </div>
    )
  }
}






      export  {SideBar};
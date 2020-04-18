import React, { } from 'react';
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';

import "../../pages/Monuments.css";
import { Link } from 'react-router-dom';

const EditPlaces = (props) => {

  return (
    <div>
      
        <Form>
        <FormGroup>
        <Label for="id"><h5>ID</h5></Label>
        <Input
          type="text"
          name="id"
          id="id"
          placeholder="Enter ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Name</h5></Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Category Name"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Adress</h5></Label>
        <Input
          type="text"
          name="adress"
          id="adress"
          placeholder="Enter Adress"
        />
        </FormGroup>
        <FormGroup>
        <Label for="exampleDate"><h5>Dates</h5></Label>
        <Input
          type="date"
          name="dates"
          id="dates"
          placeholder="Enter Date"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Fees</h5></Label>
        <Input
          type="text"
          name="fees"
          id="fees"
          placeholder="Enter Fees"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Map</h5></Label>
        <Input
          type="text"
          name="map"
          id="map"
          placeholder="Enter Map"
        />
        </FormGroup>
        
        </Form>
         <Link to='Places'>
          <Button color="success" >UPDATE</Button>{' '}
          <Button color="danger" >CANCEL</Button>
          </Link>
        
    </div>
  );

  }
export  {EditPlaces};
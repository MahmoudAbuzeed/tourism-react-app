import React, {  } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";
import { Link } from 'react-router-dom';

const EditPlacesCat = (props) => {
  

  return (
    <div>
        <Form>
        <FormGroup>
        <Label for="id"><h5>Place ID</h5></Label>
        <Input
          type="text"
          name="PlaceID"
          id="PlaceID"
          placeholder="Enter Place ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Cat ID</h5></Label>
        <Input
          type="text"
          name="catId"
          id="catId"
          placeholder="Enter Cat ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Rank</h5></Label>
        <Input
          type="text"
          name="rank"
          id="rank"
          placeholder="Enter Rank"
        /> 
        </FormGroup>
        </Form>
         <Link to='PlacesCat'>
          <Button color="success" >UPDATE</Button>{' '}
          <Button color="danger" >CANCEL</Button>
          </Link>
      
    </div>
  );
}

export  {EditPlacesCat};
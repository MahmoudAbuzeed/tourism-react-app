import React, {  } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";
import { Link } from 'react-router-dom';

const EditMonuments = (props) => {


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
        <Label for="name"><h5>Description</h5></Label>
        <Input
          type="text"
          name="description"
          id="description"
          placeholder="Enter Description"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Voice Note</h5></Label>
        <Input type="file" name="voice" id="exampleFile" />
        </FormGroup>
        <FormGroup >
        <Label for="exampleFile" ><h5>Qr Image</h5></Label>
          <Input type="file" name="image" id="exampleFile" />
      </FormGroup>
        <FormGroup>
        <Label for="name"><h5>No. Of Scans</h5></Label>
        <Input
          type="text"
          name="scan"
          id="scan"
          placeholder="Enter No. Of Scans"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Place ID</h5></Label>
        <Input
          type="text"
          name="placeId"
          id="placeId"
          placeholder="Enter Place ID"
        />
        </FormGroup>
      
      </Form>
      
           <Link to='Monuments'>
          <Button color="success" >UPDATE</Button>{' '}
         
          <Button color="danger" >CANCEL</Button>
          </Link>
      
      
    </div>
  );
}

export  {EditMonuments};
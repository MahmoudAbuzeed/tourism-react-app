import React, {  } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";
import { Link } from 'react-router-dom';

const EditMonumentImages = (props) => {
  

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
        <Label for="name"><h5>Monument ID</h5></Label>
        <Input
          type="text"
          name="monument"
          id="monument"
          placeholder="Enter Monument ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Image</h5></Label>
          <Input type="file" name="image" id="exampleFile" />
        </FormGroup>
        <FormGroup>
        <Label for="name"><h5>Altr</h5></Label>
        <Input
          type="text"
          name="altr"
          id="altr"
          placeholder="Enter Altr"
        />
        </FormGroup>
      
      </Form>
        <Link to='MonumentImages'>
          <Button color="success">UPDATE</Button>{' '}
          <Button color="danger" >CANCEL</Button>
          </Link>
       
    </div>
  );
}

export  {EditMonumentImages};
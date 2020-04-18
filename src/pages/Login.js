import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';


import "./Login.css";
import "../pages/Monuments.css";
import { Link } from 'react-router-dom';


class Login extends Component {
  render(){
    return (
        <div className="marginTop col-xs-2 " >

        <h2>Login</h2>
        <Form >
      <FormGroup row >
        <Label for="exampleEmail" sm={2} > <h5>Email</h5></Label>
        <Col sm={6}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Type email"   />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2} xs={2}><h5>Password</h5></Label>
        <Col sm={6}>
          <Input type="password" name="password" id="examplePassword" placeholder="Type password"  />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 4, offset: 4}} >
          <Link to='Home'>
          <Button color="success">Login</Button>
          </Link>
        </Col>
      </FormGroup>
    </Form>
    </div>
    )
  }
}

export  {Login};
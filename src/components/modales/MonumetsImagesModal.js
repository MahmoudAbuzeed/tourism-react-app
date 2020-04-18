import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";

const MunumetsImages = (props) => {
  const { 
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="wrapper">
      <Button className="dark "  onClick={toggle}>{buttonLabel} <span>ADD MONUMENT IMAGES</span></Button>
      </div>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Monuments</ModalHeader> 
        <ModalBody>
        <Form>
        <FormGroup>
        <Label for="id">ID</Label>
        <Input
          type="text"
          name="id"
          id="id"
          placeholder="Enter ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Monument ID</Label>
        <Input
          type="text"
          name="monument"
          id="monument"
          placeholder="Enter Monument ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Image</Label>
          <Input type="file" name="image" id="exampleFile" />
        </FormGroup>
        <FormGroup>
        <Label for="name">Altr</Label>
        <Input
          type="text"
          name="altr"
          id="altr"
          placeholder="Enter Altr"
        />
        </FormGroup>
      
      </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>ADD Image</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export  {MunumetsImages};
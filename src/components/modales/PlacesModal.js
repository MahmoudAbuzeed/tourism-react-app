import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input  } from 'reactstrap';

import "../../pages/Monuments.css";

const PlacesModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="wrapper">
      <Button className="dark " onClick={toggle}>{buttonLabel} <span>ADD PLACE</span></Button>
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
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Category Name"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Adress</Label>
        <Input
          type="text"
          name="adress"
          id="adress"
          placeholder="Enter Adress"
        />
        </FormGroup>
        <FormGroup>
        <Label for="exampleDate">Dates</Label>
        <Input
          type="date"
          name="dates"
          id="dates"
          placeholder="Enter Date"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Feeds</Label>
        <Input
          type="text"
          name="feeds"
          id="feeds"
          placeholder="Enter Feeds"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Map</Label>
        <Input
          type="text"
          name="map"
          id="map"
          placeholder="Enter Map"
        />
        </FormGroup>
        
        </Form>
                </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>ADD PLACE</Button>{' '}
          <Button color="secondary" onClick={toggle}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export  {PlacesModal};
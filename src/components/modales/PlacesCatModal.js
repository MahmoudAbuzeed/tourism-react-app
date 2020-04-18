import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";

const PlacesCatModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="wrapper">
      <Button className="dark "  onClick={toggle}>{buttonLabel} <span>ADD PLACE CAT</span></Button>
      </div>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Monuments</ModalHeader> 
        <ModalBody>
        <Form>
        <FormGroup>
        <Label for="id">Place ID</Label>
        <Input
          type="text"
          name="PlaceID"
          id="PlaceID"
          placeholder="Enter Place ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Cat ID</Label>
        <Input
          type="text"
          name="catId"
          id="catId"
          placeholder="Enter Cat ID"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Rank</Label>
        <Input
          type="text"
          name="rank"
          id="rank"
          placeholder="Enter Rank"
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

export  {PlacesCatModal};
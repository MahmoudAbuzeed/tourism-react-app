import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";

const PlaceImagesModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="wrapper">
      <Button className="dark col-md-10" size="lg" block  onClick={toggle}>{buttonLabel} <span>ADD</span></Button>
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
        <Label for="name">Place ID</Label>
        <Input
          type="text"
          name="placeId"
          id="placeId"
          placeholder="Enter Place ID"
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
          <Button color="primary" onClick={toggle}>ADD PLACE</Button>{' '}
          <Button color="secondary" onClick={toggle}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export  {PlaceImagesModal};
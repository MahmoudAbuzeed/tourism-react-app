import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import "../../pages/Monuments.css";

const MonumentsModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div className="wrapper">
      <Button className="dark" onClick={toggle}>{buttonLabel} <span>ADD MONUMENT</span></Button>
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
        <Label for="name">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Enter Description"
        />
        </FormGroup>
        <FormGroup>
        <Label for="name">Voice Note</Label>
        <Input type="file" name="voice" id="exampleFile" />
        </FormGroup>
        <FormGroup >
        <Label for="exampleFile" >Qr Image</Label>
          <Input type="file" name="image" id="exampleFile" />
      </FormGroup>
        <FormGroup>
        <Label for="name">No. Of Scans</Label>
        <Input
          type="text"
          name="scan"
          id="scan"
          placeholder="Enter No. Of Scans"
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
      
      </Form>
      
             </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>ADD MONUMENT</Button>{' '}
          <Button color="secondary" onClick={toggle}>CANCEL</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export  {MonumentsModal};
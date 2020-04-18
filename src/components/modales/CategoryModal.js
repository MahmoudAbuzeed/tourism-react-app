import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';


const CategorModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
        <div >
      <Button className="dark "  onClick={toggle}>{buttonLabel} <span>ADD CATEGORY</span></Button>
      </div>
      
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Category</ModalHeader> 
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
      </Form>
      </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>ADD Category</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export  {CategorModal};
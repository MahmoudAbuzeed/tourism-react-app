import React, { Component } from "react";

import { Table,  Button, ButtonGroup, FormGroup, Col,  } from "reactstrap";
import { CategorModal} from '../components/modales/CategoryModal'


import "./Monuments.css";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    return (
      <div className="marginTop col-xs-2" >
        <FormGroup row >
        
        <Col  >
        <h2>Category</h2>
       </Col>
       <Col sm={8} >
       < CategorModal />
       </Col>
     </FormGroup>

        
        <Table borderless>
          <thead sm={2}> 
            <tr>
              <th>ID</th> 
              <th> Name </th>
            </tr>
          </thead>
          <tbody sm={2}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <ButtonGroup>
                <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <ButtonGroup>
              <Link to='editCategory'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            
          </tbody>
        </Table>
       

        

      </div>
    );
  }
}

export { Category };

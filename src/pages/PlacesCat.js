import React, { Component } from "react";

import { Table,  Button, ButtonGroup} from "reactstrap";
import { ModalExample} from '../components/modals'


import "./Monuments.css";

class PlacesCat extends Component {
  render() {
    return (
      <div className="marginTop" >

        <h2>Places Cat</h2>
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>Place ID</th>
              <th> Cat ID</th>
              <th>Rank</th>
           
            </tr>
          </thead>
          <tbody sm={2}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
        
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
       
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
          
          </tbody>
        </Table>
       

        < ModalExample />

      </div>
    );
  }
}

export { PlacesCat };

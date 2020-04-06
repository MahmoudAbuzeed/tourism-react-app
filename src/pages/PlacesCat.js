import React, { Component } from "react";

import { Table,  Button, ButtonGroup} from "reactstrap";

import { PlacesCatModal} from '../components/modales/PlacesCatModal';


import "./Monuments.css";
import { Link } from "react-router-dom";

class PlacesCat extends Component {
  render() {
    return (
      <div className="marginTop col-xs-2" >

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
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
        
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <ButtonGroup>
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
       
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                <Link to='editPlacesCat'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
          
          </tbody>
        </Table>
       

        < PlacesCatModal />

      </div>
    );
  }
}

export { PlacesCat };

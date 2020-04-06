import React, { Component } from "react";

import { Table,  Button, ButtonGroup } from "reactstrap";
import { PlacesModal} from '../components/modales/PlacesModal';
import { Link } from "react-router-dom";


import "./Monuments.css";

class Places extends Component {
  render() {
    return (
      <div className="marginTop col-xs-2" >

        <h2>Places</h2>
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>ID</th>
              <th> Name</th>
              <th>Address</th>
              <th>Dates</th>
              <th> Feeds</th>
              <th>Map</th>
              
            </tr>
          </thead>
          <tbody sm={2}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
              <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Larry</td>
              <td>the Bird</td>
              <ButtonGroup>
                <Link to="editPlaces">
                 <Button className="dark"> <span>Update</span></Button>
                 </Link>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
            </tr>
          </tbody>
        </Table>
       

        < PlacesModal />

      </div>
    );
  }
}

export { Places };

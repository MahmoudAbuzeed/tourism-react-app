import React, { Component } from "react";

import { Table,  Button, ButtonGroup } from "reactstrap";
import { PlaceImagesModal} from '../components/modales/PlaceImagesModal'


import "./Monuments.css";

class PlaceImages extends Component {
  render() {
    return (
      <div className="marginTop col-xs-2" >

        <h2>Place Images</h2>
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>ID</th>
              <th> Place ID</th>
              <th>Image</th>
              <th>Altr </th>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
          </thead>
          <tbody sm={2}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
                 <Button className="dark"> <span>Update</span></Button>
                 <Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            
          </tbody>
        </Table>
       

        < PlaceImagesModal />

      </div>
    );
  }
}

export { PlaceImages };

import React, { Component } from "react";

import { Table,  Button, ButtonGroup, FormGroup, Col } from "reactstrap";
import { PlaceImagesModal} from '../components/modales/PlaceImagesModal'


import "./Monuments.css";
import { Link } from "react-router-dom";

class PlaceImages extends Component {
  render() {
    return (
      <div className="marginTop col-xs-2" >
         <FormGroup row >
        
        <Col  >
        <h2>Place Images</h2>
       </Col>
       <Col sm={8}>
       < PlaceImagesModal />
       </Col>
     </FormGroup>

        
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>ID</th>
              <th> Place ID</th>
              <th>Image</th>
              <th>Altr </th>
              
              
            </tr>
          </thead>
          <tbody sm={2}>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
              
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
              <Link to='editPlaceImages'>
                 <Button className="dark"> <span>Update</span></Button>
                 </Link><Button className="dark"><span>Delete</span></Button>
              </ButtonGroup>
              
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <ButtonGroup>
                <Link to='editPlaceImages'>
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

export { PlaceImages };

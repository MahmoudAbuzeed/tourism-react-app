import React, { Component } from "react";

import { Table,  Button,ButtonGroup } from "reactstrap";
import { ModalExample} from '../components/modals'


import "./Monuments.css";

class MonumentImages extends Component {
  render() {
    return (
      <div className="marginTop" >

        <h2>Monuments Images</h2>
        <Table borderless>
          <thead sm={2}>
            <tr>
              <th>ID</th>
              <th> Moment ID</th>
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
       

        < ModalExample />

      </div>
    );
  }
}

export { MonumentImages };

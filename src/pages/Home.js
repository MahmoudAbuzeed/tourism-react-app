import React, { Component } from "react";

import pic6 from '../images/pic6.jpg'

import "../pages/Home.css"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardDeck,
  Badge 
} from "reactstrap";

class Home extends Component {
  render() {
    return (
     <div> 
       <div><h1>Meet some of our kings <Badge color="secondary">TooT</Badge></h1></div>
      <CardDeck>
      <Card>
        <CardImg top width="100%" src={pic6} alt="Card image cap" />
        <CardBody>
          <CardTitle>Tutankhamun</CardTitle>
          <CardSubtitle>One of the egyptian kings</CardSubtitle>
          <CardText>Tutankhamun took the throne at eight or nine years of age under the unprecedented viziership of his eventual successor, Ay, to whom he may have been related.</CardText>
          <Button className="btnMargin" outline color="warning">See More</Button>
          <Button outline color="danger">Love Him!</Button>
        </CardBody> 
      </Card>
      <Card>
        <CardImg top width="100%" src={pic6} alt="Card image cap" />
        <CardBody>
          <CardTitle>Tutankhamun</CardTitle>
          <CardSubtitle>One of the egyptian kings</CardSubtitle>
          <CardText>Tutankhamun took the throne at eight or nine years of age under the unprecedented viziership of his eventual successor, Ay, to whom he may have been related.</CardText>
          <Button className="btnMargin" outline color="warning">See More</Button>
          <Button outline color="danger">Love Him!</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={pic6} alt="Card image cap" />
        <CardBody>
          <CardTitle>Tutankhamun</CardTitle>
          <CardSubtitle>One of the egyptian kings</CardSubtitle>
          <CardText>Tutankhamun took the throne at eight or nine years of age under the unprecedented viziership of his eventual successor, Ay, to whom he may have been related.</CardText>
          <Button className="btnMargin" outline color="warning">See More</Button>
          <Button outline color="danger">Love Him!</Button>
        </CardBody>
      </Card>
    </CardDeck>
    </div>
      
    );
  }
}

export { Home };

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { Home, Login, Monuments, MonumentImages, Category, Places, PlacesCat, PlaceImages} from './pages'; 

import { NavBar, SideBar} from './components';



function App() {
  return (
    <div>
      
      <NavBar />
      <SideBar />
      <Container>
       
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/Monuments" component={Monuments} exact />
      <Route path="/MonumentImages" component={MonumentImages} exact />
      <Route path="/PlaceImages" component={PlaceImages} exact />
      <Route path="/Category" component={Category} exact />
      <Route path="/Places" component={Places} exact />
      <Route path="/PlacesCat" component={PlacesCat} exact />
     
      </Switch>
      </Container>
    </div>
  );
}

export default App;

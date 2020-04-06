import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { Home, Login, Monuments, MonumentImages, Category, Places, PlacesCat, PlaceImages} from './pages'; 
import { EditMonuments, EditMonumentImages, EditCategory, EditPlacesCat, EditPlaces, EditPLaceImages} from './pages/editPages';

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
      <Route path="/editMonuments" component={EditMonuments} exact />
      <Route path="/editMonumentImages" component={EditMonumentImages} exact />
      <Route path="/editCategory" component={EditCategory} exact />
      <Route path="/editPlacesCat" component={EditPlacesCat} exact />
      <Route path="/editPlaces" component={EditPlaces} exact />
      <Route path="/editPlaceImages" component={EditPLaceImages} exact />


     
      </Switch>
      </Container>
    </div>
  );
}

export default App;

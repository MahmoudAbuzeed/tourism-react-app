import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import { Home, Login, About, Services, Contact} from './pages'; 

import { NavBar} from './components';



function App() {
  return (
    <div>
      <NavBar />
      
      <Container>
      
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/About" component={About} exact />
      <Route path="/Services" component={Services} exact />
      <Route path="/Contact" component={Contact} exact />
      </Switch>
      </Container>
    </div>
  );
}

export default App;

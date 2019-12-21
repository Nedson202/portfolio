import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from '../Components/NavBar';
import NotFound from '../Components/NotFound';
import RParticles from '../Components/Particles';
import Base from '../views/Base';
import Projects from '../views/Projects';
// import Places from '../Components/Places';

const Routes = () => (
  <React.Fragment>
    <NavBar />
    <RParticles />
    <Switch>
      <Route path='/' component={Base} exact={true} />
      <Route path='/projects' component={Projects} exact={true} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);

export default Routes;

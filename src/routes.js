import React from 'react';
import { Route, IndexRedirect } from 'react-router';

// Containers
import Full from './containers/Full/';
import Departments from './views/Departments/';
import Employees from './views/Employees/';

export default (
    <Route path="/" name="Home" component={Full}>
      <IndexRedirect to="departments" />
      <Route path="departments" name="Departments" component={Departments}/>
      <Route path="employees" name="Employees" component={Employees}/>
    </Route>
);

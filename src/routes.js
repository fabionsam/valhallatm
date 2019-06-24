import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/index.js';
import Oficiais from './pages/Oficiais/index.js';
import Recruit from './pages/Recruit/index.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/oficiais" component={Oficiais}/>
            <Route path="/recrutamento" component={Recruit}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/index.js';
import Recruit from './pages/Recruit/index.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/recrutamento" component={Recruit}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
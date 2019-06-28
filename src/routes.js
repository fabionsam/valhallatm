import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/index.js';
import Regras from './pages/Regras/index.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/regras" component={Regras}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
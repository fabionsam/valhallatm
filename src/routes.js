import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home/index.js';
import Regras from './pages/Regras/index.js';
import Admin from './pages/Admin/index.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/regras" component={Regras}/>
            <Route path="/umaurlproadmin" component={Admin}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
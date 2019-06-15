import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Form from './components/Form/Form.js';
import Details from './components/Details/Details.js';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/add' component={Form}/>
            <Route path='/details/:id' component={Details}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
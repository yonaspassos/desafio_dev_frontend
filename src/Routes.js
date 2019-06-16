import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Main from './components/Main/Main.js';
import Form from './components/Form/Form.js';
import Details from './components/Details/Details.js';


const Routes = () => (
    <BrowserRouter>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink>
            </li>
        </ul>
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/add' component={Form}/>
            <Route path='/details/:id' component={Details}/>
            <Route path='/edit/:id' component={Form} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
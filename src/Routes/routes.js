import React from "react";
// import Home from "../Home";
import Root from "../container/root";
import LoginForm from '../components/Login/loginForm';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const Routes = () => (
    <div>
        <Root>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LoginForm}/>
                </Switch>
            </BrowserRouter>
        </Root>
    </div>
);

export default Routes;
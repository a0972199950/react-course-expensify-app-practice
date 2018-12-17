import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import CreatePage from "../components/CreatePage";
import EditPage from "../components/EditPage";
import NoMatchPage from "../components/NoMatchPage";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={HomePage} />
                <PrivateRoute path="/create" component={CreatePage} />
                <PrivateRoute path="/edit/:id" component={EditPage} />
                <Route component={NoMatchPage} />
            </Switch>  
        </div>         
    </BrowserRouter>
);

export default AppRouter;
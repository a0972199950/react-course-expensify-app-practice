import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import CreatePage from "../components/CreatePage";
import EditPage from "../components/EditPage";
import NoMatchPage from "../components/NoMatchPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/create" component={CreatePage} />
                <Route path="/edit/:id" component={EditPage} />
                <Route component={NoMatchPage} />
            </Switch>  
        </div>         
    </BrowserRouter>
);

export default AppRouter;
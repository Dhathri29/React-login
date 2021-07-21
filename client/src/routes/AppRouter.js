import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../layout/Login";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    );
};

export default Routes;

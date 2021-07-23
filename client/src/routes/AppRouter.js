import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "../layout/Login";
import Register from "../layout/Register";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    );
};

export default Routes;

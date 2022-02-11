import React from "react";

import { Route } from "react-router";

import ServerList from "../cards/opcua/ServerList";
import ServerDetail from "../cards/opcua/ServerDetail";
import ServerRegistration from "../cards/opcua/ServerRegister";

const Server = ({match}) => {
    return(
        <div className="container-fluid mt-4">
            <Route exact path={match.path} component={ServerList}/>
            <Route exact path={`${match.path}/:id`} component={ServerDetail} />
            <Route exact path={`${match.path}/client/add`} component={ServerRegistration} />
        </div>
    )
}

export default Server;
import React, { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";

import Overview from "./components/pages/Overview";
import Monitor from "./components/pages/Monitor";
import Server from "./components/pages/Server";
import PageNotFound from "./components/error/PageNotFound";
import Login from "./components/pages/Login";
const App = () =>{
  const [inactive, setInactive] = useState(false);

  return(
    <>
      <Router>
          <Sidebar
          onCollapse={(inactive) => {
            setInactive(inactive);
          }} />
          <div className={`main-container ${inactive ? "inactive" : ""}`}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Overview} />
              <Route path="/monitor" component={Monitor} />
              <Route path="/server" component={Server} />
              <Route path="/login" component={Login} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
      </Router>
    </>
  );
};

export default App;

import React from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Sidebar from './components/sidebar/Sidebar';
import PageNotFound from './components/error/PageNotFound';
import Dashboard from './components/dashboard/Dashbaord';
import Nav from './components/nav/Nav';
import Monitor from './components/dashboard/Monitor';

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
              <Route exact path="/" component={Dashboard} />
              <Route path="/monitor" component={Monitor} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
      </Router>
    </>
  );
};

export default App;

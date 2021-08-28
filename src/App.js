import React from 'react';
import {
  DropdownToggle, DropdownMenu,
  Nav, Button, NavItem, NavLink,
  UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';

import {
  faCalendarAlt,
  faAngleUp,
  faBars

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import avatar1 from './components/01.png';

import Landing from "./components/landing.component";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <FontAwesomeIcon icon={faBars}/>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          <Link className="navbar-brand" to={"/sign-in"}>Shopperbird</Link>
          </li>
          </ul>
            <ul className="navbar-nav ml-auto">
              <li>
              <UncontrolledButtonDropdown>
                                    <DropdownToggle color="default" className="p-0">
                                      <h6>Join Us
                                        <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                        </h6>
                                    </DropdownToggle>
                                    <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                                        <Nav vertical>
                                            <NavItem className="nav-item-header">
                                                Sign In
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/sign-in">
                                                    Login
                                                    
                                                </NavLink>
                                            </NavItem>
                                
                                            <NavItem className="nav-item-header">
                                                Sign Up
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href="/sign-up">
                                                    Register
                                                    <div className="ml-auto badge badge-success">New</div>
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>


            <Route exact path='/' component={Landing} />
            <div className="outer">
        <div className="inner">
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />

        </div>
      </div>
      </Switch>
    </div></Router>
  );
}

export default App;

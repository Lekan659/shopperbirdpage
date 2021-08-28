import React, { Component, Fragment } from "react";

export default class Landing extends Component {
    render() {
        return (
            <div>
            <div className = 'split left'>
              <h1>Reach Customers</h1>
              <a href="#"  className="btn btn-outline-light btn-lg btn-block">Supplier</a>
            </div>
            <div className = 'split right'>
              <h1>The Programmer</h1>
              <h1><a href="#"  className="btn btn btn-outline-dark btn-lg btn-block">Customers</a></h1>
            </div>
          </div>
        );
    }
}

import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h1>Join us for free!</h1>
                <p>Together we make the new system</p>
                <div className = 'row'>
                    
                <div className="form-group col-md-6">
                    
                    <input type="email" className="form-control" placeholder="First Name" />
                    
                </div>
                <div className="form-group col-md-6">
                    
                    <input type="email" className="form-control" placeholder="Last Name" />
                    
                </div>
                </div>
                <div className="form-group">
                    
                    <input type="email" className="form-control" placeholder="Email" />
                    
                </div>
                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Confirm password" />
                </div>

                

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
            </form>
        );
    }
}

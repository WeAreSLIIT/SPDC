import React, {Component} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';
import config from '../config/config' ;
import Auth from './Auth';

class SignIn extends Component {
    constructor() {
        super();

        this.auth = new Auth();

        this.state = {
            username: '',
            password: '',
        }

        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post(config.api+`users/login`, {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            this.auth.setUserDetails(response.data.login, response.data.user.username, response.data.user.admin);
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container p-2">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h3 className="display-4 mb-2">Welcome To The Pharmacy System</h3>
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h4 className="card-title text-center">Sign In</h4>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-label-group p-2">
                                            <input type="text" className="form-control" name="username"
                                            placeholder="Username" value={this.state.username} onChange={this.onChange} required/>
                                        </div>

                                        <div className="form-label-group p-2">
                                            <input type="password" className="form-control" name="password"
                                            placeholder="Password" value={this.state.password} onChange={this.onChange} required/>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="submit" className="btn btn-lg btn-primary btn-block" value="Sign In"/>
                                            </div>
                                            <div className="col-lg-6">
                                                <Link to="/SignUp"><input type="button" className="btn btn-lg btn-success btn-block" value="SignUp"/></Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignIn;
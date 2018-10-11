import React, {Component} from 'react';
import axios from 'axios';
import config from '../config/config' ;

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            fname: '',
            lname: '',
            username: '',
            password: ''
        }

        this.onChange= this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClearForm = this.onClearForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        axios.post(config.api+'users/', {
            fname: this.state.fname,
            lname: this.state.lname,
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
            alert('User registration successful');
            this.onClearForm();
        })
        .catch(error => {
            console.log(error);
        });
    }

    onClearForm(e) {
        this.setState({
            fname: '',
            lname: '',
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="container p-2">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-5 mt-3">SignUp</h1>
                        <div className="card card-signin">
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-md" 
                                        placeholder="First Name" name="fname" value={this.state.fname} onChange={this.onChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-md" 
                                        placeholder="Last Name" name="lname" value={this.state.lname} onChange={this.onChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-md" 
                                        placeholder="Username" name="username" value={this.state.username} onChange={this.onChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-md" 
                                        placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} required/>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <input type="submit" className="btn btn-info btn-block" value="Submit"/>
                                        </div>
                                        <div className="col-lg-6">
                                            <input type="button" className="btn btn-secondary btn-block" onClick={this.onClearForm} value="Clear"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
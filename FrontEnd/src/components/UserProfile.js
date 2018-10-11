import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import config from '../config/config' ;

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            type: "",
            edit: false
        }
        let username = this.props.match.params.username;

        this.loadUserDetatils(username);

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            edit: true,
        });
    }

    loadUserDetatils(username) {
        axios.get(config.api+'users/'+username)
        .then(response => {
            console.log(response);
            this.setState({
                user: response.data[0],
                type: (response.data[0].admin) ? "Admin" : "Service"
            });
        }).catch(error => {
            console.log(error)
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.state.user.admin = (this.state.type === "Admin") ? true : false;
        axios.put(config.api+'users/'+this.state.user.username, this.state.user)
        .then(response => {
            console.log(response);
            alert('User update successful');
        })
        .catch(error => {
            console.log(error);
        });
    }

    onDelete(e) {
        axios.delete(config.api+'users/'+this.state.user.username, {
        })
        .then(response => {
            console.log(response);
            alert('User successfully Deleted');
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="container p-2" id="background">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1 className="display-5 mt-3">User Profile</h1>
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>User Type </label>
                                            <select className="form-control form-control form-control-md" name="type" value={this.state.type} onChange={this.onChange}>
                                                <option>Admin</option>
                                                <option>Service</option>
                                            </select>
                                        </div>
                                        <div className="col-lg mt-3">
                                            <label><span className="label label-success">First Name : </span>{this.state.user.fname} </label>
                                        </div>
                                        
                                        <div className="col-lg mt-3">
                                            <label><span className="label label-success">Last Name : </span>{this.state.user.lname} </label>
                                        </div>

                                        <div className="col-lg mt-3">
                                            <label><span className="label label-success">Username : </span>{this.state.user.username} </label>
                                        </div>

                                        <div>
                                            {
                                                (this.state.edit) ? (
                                                    <div className="col-lg mt-3">
                                                        <input type="submit" className="btn btn-info btn-block" value="Confirm" />
                                                    </div>
                                                ) : null
                                            }
                                            

                                            <div className="col-lg mt-3">
                                                <input type="button" className="btn btn-danger btn-block" onClick={this.onDelete} value="Delete"/>
                                            </div>

                                            <div className="col-lg mt-3">
                                                <Link to='/'><input type="button" className="btn btn-secondary btn-block" value="Back"/></Link>
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

export default UserProfile;
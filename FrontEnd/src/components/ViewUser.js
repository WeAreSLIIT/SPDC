import React, {Component} from 'react';
import axios from 'axios';
import config from '../config/config' ;

class UserView extends Component {
    constructor() {
        super();

        this.state = {
            users: []
        }

    }

    componentDidMount() {
        axios.get(config.api+`users/`, {
        })
        .then(response => {
            console.log(response);
            this.setState({
                users: response.data,
            });
        })
        .catch(error => {
            console.log(error)
        })
    }

    onView(username) {
        console.log(username);
        this.props.history.push(`/UserProfile/`+username)
    }

    render() {
        var rows = this.state.users.map(function (data, i, onDelete) {
            return (
                <tr key={i}>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.username}</td>     
                    <td>{(data.admin) ? "Admin" : "Service"}</td>
                    <td><input type="button" className="btn btn-info btn-block" onClick={() => this.onView(data.username)} value="View"/></td>
                </tr>
            )
        }.bind(this))

        return (
            <div className="container p-2" id="background">
                <div className="row">
                    <div className="col-md-12 text-center mt-5">
                        <h1 className="display-5 mt-3 text-left">View Users</h1>
                        <hr/>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Type</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserView;

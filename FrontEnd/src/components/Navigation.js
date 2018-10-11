import { Component } from 'react';
import navigation from './Navigation.jsx';
import Auth from './Auth';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.auth = new Auth();
    
        this.toggle = this.toggle.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      onLogout() {
        this.auth.logout();
      }
  render = navigation;
}

export default Navigation;

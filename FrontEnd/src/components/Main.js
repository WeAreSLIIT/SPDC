import { Component } from 'react';
import main from './Main.jsx';
import Auth from './Auth';

class Main extends Component {
  constructor() {
    super();

    this.auth = new Auth();
}
  render = main;
}

export default Main;

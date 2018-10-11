import React from 'react';
import { Container } from 'reactstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
import MedicineNew from './MedicineNew';
import MedicineList from './MedicineList';
import MedicineStore from './MedicineStore';
import Navigation from './Navigation';
import ViewUser from './ViewUser';
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from 'react-router-dom/Switch';

const render = function () {

  return (
    <div>
      <Router>
        <div>
        <Navigation></Navigation>
        <Container>
        {
          (this.auth.isLoggedIn) ? (
            (this.auth.isAdmin) ? (
              <Switch>
                <Route path="/" component={ViewUser} />
                <Route path="/Medicine/List" component={MedicineList} />  
                <Route path="/Medicine/:id" component={MedicineNew} />
                <Route path="/UserProfile/:username" component={UserProfile} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/" component={MedicineStore} /> 
              </Switch>
            )
          ) : (
            <Switch>
              <Route path="/" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
            </Switch>
          )
        } 
        </Container>
        </div>
      </Router>
    </div>
  );
};

export default render;

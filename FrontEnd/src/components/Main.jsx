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
          <Switch>
          
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Medicine/List" component={MedicineList} />  
            <Route path="/Medicine/:id" component={MedicineNew} />
            <Route path="/Store" component={MedicineStore} /> 
            <Route path="/Users" component={ViewUser} />
            <Route path="/UserProfile/:username" component={UserProfile} />

             
          
          </Switch>

        </Container>
        </div>
      </Router>
    </div>
  );
};

export default render;

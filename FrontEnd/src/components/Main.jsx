import React from 'react';
import { Container } from 'reactstrap';
import MedicineNew from './MedicineNew';
import MedicineList from './MedicineList';
import MedicineStore from './MedicineStore';
import Navigation from './Navigation';
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
          
            <Route path="/Medicine/List" component={MedicineList} />  
            <Route path="/Medicine/:id" component={MedicineNew} />
            <Route path="/Store" component={MedicineStore} />  

          </Switch>

        </Container>
        </div>
      </Router>
    </div>
  );
};

export default render;

import React from 'react';
import { Container } from 'reactstrap';
import MedicineNew from './MedicineNew';
import MedicineList from './MedicineList';
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const render = function () {

  return (
    <div>
      <Router>
        <div>
        <Navigation></Navigation>
        <Container>
          
          <Route exact path="/Medicine/List" component={MedicineList} />
          <Route exact path="/Medicine/New" component={MedicineNew} />
          <Route exact path="/Medicine/:id" component={MedicineNew} />


        </Container>
        </div>
      </Router>
    </div>
  );
};

export default render;

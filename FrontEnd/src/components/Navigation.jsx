import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const render = function () {

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Pharmacy System</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <NavLink><Link to="/Medicine/New">Add New</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/Medicine/List">View List</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Medicines
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Test
                </DropdownItem>
                <DropdownItem>
                  Test 2
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default render;

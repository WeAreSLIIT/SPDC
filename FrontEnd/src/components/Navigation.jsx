import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Link } from "react-router-dom";
const render = function () {

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Pharmacy System</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
          <Link className="nav-link" to="/Medicine/New">Add New</Link>
            </NavItem>
            <NavItem>
            <Link  className="nav-link" to="/Medicine/List">View List</Link>
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

import React from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap';
import { Link } from "react-router-dom";
const render = function () {

  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Pharmacy System</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        {
          (this.auth.isLoggedIn) ? (
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {
                  (this.auth.isAdmin) ? (
                    <NavItem>
                      <Link className="nav-link" to="/">View User</Link>
                    </NavItem>
                  ) : (
                    <NavItem>
                      <Link className="nav-link" to="/">Store</Link>
                    </NavItem>
                  )
                }
                {
                  (this.auth.isAdmin) ? (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret> Medicines </DropdownToggle>
                    <DropdownMenu>
                      <Link className="nav-link" to="/Medicine/New"><DropdownItem> Add </DropdownItem></Link>
                      <Link className="nav-link" to="/Medicine/List"><DropdownItem> View </DropdownItem></Link>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  ) : null
                }
                <Button color="danger" onClick={this.onLogout}>Logout</Button>
              </Nav>
            </Collapse>
          ): null
        }
      </Navbar>
    </div>
  );
};

export default render;

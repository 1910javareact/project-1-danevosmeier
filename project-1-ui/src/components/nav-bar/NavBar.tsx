import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const FNavBar = (props:any) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div> 
      <Navbar color="faded" light>
        <NavItem>
          <Link to='/'>Dr. Frankenstein ERS</Link>
        </NavItem>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to='/login'>Login</Link>
            </NavItem>
            <NavItem>
              <Link to='/users'>Users</Link>
            </NavItem>
            <NavItem>
              <Link to='/usersbyid'>Users By Id</Link>
            </NavItem>
            <NavItem>
              <Link to='/updateuser'>User Update</Link>
            </NavItem>
            <NavItem>
              <Link to='/reimbursement/user'>Reimbursements By User</Link>
            </NavItem>
            <NavItem>
              <Link to='/reimbursement/status'>Reimbursements By Status</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default FNavBar
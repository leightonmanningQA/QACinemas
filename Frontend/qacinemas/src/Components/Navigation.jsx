import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import logo from "./images/qalogo.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <>  
        <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">
        <img src={logo} width="70" height="50" class="d-inline-block align-top" alt=""/>
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem style={{color:"white"}}>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/openingtimes">Opening Times</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Gallery
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/listingsgallery">
                  Listings Gallery
                </DropdownItem>
                <DropdownItem href="/newreleases">
                  New Releases
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/classifications">Classifications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/screens">Screens</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ticketbookings">Ticket Bookings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/placestogo">Places To Go</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/gettingthere">Getting There</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/search">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/discussion">Discussion</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
          
        </>
        
    )
        
}
export default Navigation;
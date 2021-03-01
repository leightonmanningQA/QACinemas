import {Link} from 'react-router-dom';
import React, { useState } from 'react';
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Qa Cinemas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
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
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
            {/* <Navbar color="secondary" light expand ="md">
            <a className="navbar-brand" href="/">QA Cinemas</a>
            <Link to="/" className="btn btn-outline-light">Home</Link>
            <Link to="/about" className="btn btn-outline-light">About</Link>
            <Link to="/gallery" className="btn btn-outline-light">Gallery</Link>
            <Link to="/openingtimes" className="btn btn-outline-light">Opening Times</Link>
            <Link to="/classifications" className="btn btn-outline-light">Classifications</Link>
            <Link to="/screens" className="btn btn-outline-light">Screens</Link>
            <Link to="/ticketbookings" className="btn btn-outline-light">Ticket Bookings</Link>
            <Link to="/placestogo" className="btn btn-outline-light">Places To Go</Link>
            <Link to="/gettingthere" className="btn btn-outline-light">Getting There</Link>
            <Link to="/search" className="btn btn-outline-light">Search</Link>
            <Link to="/contact" className="btn btn-outline-light">Contact</Link>
            </Navbar> */}
        </>
        
    )
        
}
export default Navigation;
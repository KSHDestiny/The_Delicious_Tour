import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./assets/images/logo.png";
import { Link, useLocation } from 'react-router-dom';
import pages from '../../utils/page';
import './assets/css/style.css';


const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const Header = () => {

    const { pathname } = useLocation();

  return (
    <header>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Link to="/" className='navbar-brand d-flex align-items-center'>
                    <Image src={logo} width={50} />
                    <h3 className='display-6'>The Delicious Tour</h3>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    {navLinks.map((navLink) =>
                        <Link key={navLink.name} className={pathname === navLink.path ? 'nav-link active' : 'nav-link'} to={navLink.path}>
                            {navLink.name}
                        </Link>
                    )}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
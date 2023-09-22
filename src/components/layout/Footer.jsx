import React from 'react';
import { Image } from 'react-bootstrap';
import logo from "./assets/images/logo.png";
import { Link, useLocation } from 'react-router-dom';
import pages from '../../utils/page';
import './assets/css/style.css';

import { faEnvelope,faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const navLinks = Array.from(pages.values()).filter(page => page.anchorable);

const contacts = [
    { icon: faLocationDot, info: 'Kabaraye Pagoda Road, Yangon, Myanmar', href:"/" },
    { icon: faPhone, info: '(+95) 9753-2699', href:"tel:+9597532699" },
    { icon: faEnvelope, info: 'delicious-tour@gmail.com', href:"mailto:delicious-tour@gmail.com" },
];

const Footer = () => {
    const { pathname } = useLocation();


  return (
    <footer className='container-fluid bg-light'>
      <article className='row align-items-center pt-3'>
        <section className='col-6 col-md-3'>
          <Image src={logo} width={100} alt='logo' />
        </section>
        <section className='col-6 col-md-3'>
          <h6>Navigation</h6>
          <ul className='list-unstyled'>
            {navLinks.map((navLink) =>
                <Link key={navLink.name} className={pathname === navLink.path ? 'nav-link active' : 'nav-link'} to={navLink.path}>
                    {navLink.name}
                </Link>
            )}
          </ul>
        </section>
        <section className='col-6 col-md-3'>
          <h6>Connect</h6>
          <ul className='list-unstyled'>
            {contacts.map((contact)=>
                <li><FontAwesomeIcon icon={contact.icon} size="lg" /> <a href={contact.href}>{contact.info}</a></li>
            )}
          </ul>
        </section>
        <section className='col-6 col-md-3'>
          <h6>Social Media Links</h6>
          <ul className='list-unstyled'>
            <li><a href="#home">Tarmwae, Yangon</a></li>
            <li><a href="tel:09111222333">09111222333</a></li>
            <li><a href="mailto:delicious-tour@gmail.com">delicious-tour@gmail.com</a></li>
          </ul>
        </section>
      </article>
    </footer>
  )
}

export default Footer
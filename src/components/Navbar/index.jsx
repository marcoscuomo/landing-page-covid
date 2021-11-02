import { useState, useEffect } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { Link, animateScroll as scroll } from "react-scroll";


import { Container, Menu } from './styles';
import logo from '../../assets/images/logo.png';

export function Navbar() {

  const [classFixed, setClassFixed] = useState('initial');
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    
    position > 121 ? setClassFixed('fixed') : setClassFixed('initial');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
}, []);

  function handleNav() {
    
  }

  return (
    <Container  className={classFixed}>
      <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <Image 
            src={logo} 
            alt="Logo"
          />
      </Link>

      <Menu>
        <ul>
          <li>
            <Link to="overview" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Overview
            </Link>
          </li>
          <li>
            <Link to="contagion" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Contagion
            </Link>  
          </li>
          <li>
            <Link to="symptomps" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Symptoms
            </Link>
          </li>
          <li>
            <Link to="prevention" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Prevention
            </Link>
          </li>
        </ul>
        
        <a href="https://www.who.int/about/contact-us" target="_blank" className="contact">Contact</a>
        
      </Menu>
    </Container>
  );
}
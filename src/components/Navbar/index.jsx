import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link as LinkNav, animateScroll as scroll } from "react-scroll";


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
      <LinkNav activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <Image 
            src={logo} 
            alt="Logo"
          />
      </LinkNav>

      <Menu>
        <ul>
          <li>
            <LinkNav to="overview" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Overview
            </LinkNav>
          </li>
          <li>
            <LinkNav to="contagion" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Contagion
            </LinkNav>  
          </li>
          <li>
            <LinkNav to="symptomps" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Symptoms
            </LinkNav>
          </li>
          <li>
            <LinkNav to="prevention" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>
              Prevention
            </LinkNav>
          </li>
        </ul>
        
        <a href="https://www.who.int/about/contact-us" target="_blank" className="contact">Contact</a>
        
      </Menu>
    </Container>
  );
}
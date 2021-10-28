import Image from 'next/image';
import Link from 'next/link';

import { Container, Menu } from './styles';
import logo from '../../assets/images/logo.svg';

export function Navbar() {
  return (
    <Container>
      <Image 
        src={logo} 
        alt="Logo"
      />

      <Menu>
        <ul>
          <li className="active">
            <Link href="/">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contagion</a>
            </Link>  
          </li>
          <li>
            <Link href="/">
              <a>Symptoms</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Prevention</a>
            </Link>
          </li>
        </ul>
        <button className="contact">Contact</button>
      </Menu>
    </Container>
  );
}
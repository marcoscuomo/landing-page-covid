import { Navbar } from '../Navbar';
import { Banner } from '../Banner';

import { Container } from './styles';

export function Header() {
  return (
    <Container id="home">
      <Navbar />
      <Banner />
    </Container>
  );
}
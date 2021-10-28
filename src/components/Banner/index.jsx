import Image from 'next/image';

import { Container, Info, ArtBanner } from './styles';
import artBanner from '../../assets/images/artBanner.png';

export function Banner() {
  return(
    <Container>
      <Info>
        <h2>COVID-19 Alert</h2>
      </Info>
      
      <ArtBanner> 
        <Image src={artBanner} alt="Covid-19 Alert" />
      </ArtBanner>
    </Container>
  )
}
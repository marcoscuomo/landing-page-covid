import Image from 'next/image';

import { Container, Info, ArtBanner } from './styles';
import artBanner from '../../assets/images/artBanner.png';

export function Banner() {
  return(
    <Container>
      <Info>
        <h1>COVID-19 Alert</h1>
        <h2>Stay at Home Quarantine to Stop Corona Virus</h2>
        <p>There is no specific medicine to prevent or treat Coronavirus Disease(COVID-19). People may need supportive care to.</p>

        <button>Let us Help</button>
      </Info>
      
      <ArtBanner> 
        <Image className="imgBanner" src={artBanner} alt="Covid-19 Alert" />
      </ArtBanner>
    </Container>
  )
}
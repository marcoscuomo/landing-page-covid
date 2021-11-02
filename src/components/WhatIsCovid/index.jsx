import Image from 'next/image';
import Link from 'next/link';

import whatiscovid from '../../assets/images/whatiscovid.png';
import { Container, WhatIsCovidContainer } from './styles';
import { Title } from '../Title';

export function WhatIsCovid() {
  return (
    <Container id="overview">
      <Image className="imgWhatIs" src={whatiscovid} alt="What is Covid?" />
      <WhatIsCovidContainer>
        <Title mainTitle="What is Covid-19" subTitle="Coronavirus" />
        <p>
          Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
          A newly identified type has caused a recent outbreak of respiratory illness now called 
          COVID-19.Lauren Sauer, M.S., the director of operations with the Johns Hopkins Office of 
          Critical Event Preparedness and Response.
        </p>
        <Link href="https://www.paho.org/pt/covid19">
          <a target="_blank">Learn more</a>
        </Link>
      </WhatIsCovidContainer>
    </Container>
    
  )
}
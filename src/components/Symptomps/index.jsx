import Image from 'next/image';

import symptomps from '../../assets/images/symptomps.png';
import { Title } from '../Title';
import { Container } from './styles';

export function Symptomps() {
  return (
    <Container id="symptomps">
      <Title mainTitle="Covid-19" subTitle="Symptomps" />

      <p>
        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
        A newly identified type has caused a recent outbreak of respiratory 
      </p>

      <Image src={symptomps} alt="symptomps" />
    </Container>  
  )
}
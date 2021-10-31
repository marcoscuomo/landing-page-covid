import { Title } from '../Title';
import { Card } from '../Card';
import cardAirTransmission from '../../assets/images/card_air_transmission.png';
import { Container, TextInfo, Cards } from './styles';

const Contagion = () => {
  return (
    <Container>
      <Title mainTitle="Covid-19" subTitle="Contagion" />
      <TextInfo>
        <p>
          Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
          A newly identified type
        </p>
      </TextInfo>

      <Cards>
        <Card 
          img={cardAirTransmission}
          alt="Air Transmission"
          title="Air Transmission"
          text="Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify"
        />
      </Cards>
    </Container>
  )
}

export { Contagion }
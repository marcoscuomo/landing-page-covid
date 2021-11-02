import { useState } from 'react';
import Image from 'next/image';

import { Title } from '../Title';
import { Card } from '../Card';
import cardAirTransmission from '../../assets/images/card_air_transmission.png';
import cardHumanContacts from '../../assets/images/card_human_contacts.png'
import cardContaintedObjects from '../../assets/images/card_containted_objects.png';
import cardBackCoronaVirus from '../../assets/images/card_back_coronavirus.png';
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
          text="Objectively evolve tactical expertise before extensible initiatives."
        />

        <Card 
          img={cardHumanContacts}
          alt="Human Contacts"
          title="Human Contacts"
          text="Washing your hands is one of thesimplest ways you can protect"
        />

        <Card 
          img={cardContaintedObjects}
          alt="Containted Objects"
          title="Containted Objects"
          text="Use the tissue while sneezing,In this way, you can protect your droplets."
        />
      </Cards>
      <div className="bgCards">
        <Image src={cardBackCoronaVirus} />
      </div>
    </Container>
  )
}

export { Contagion }
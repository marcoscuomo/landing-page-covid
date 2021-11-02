import { Title } from '../Title';
import { WhatShouldItens } from '../WhatShouldItens';
import { Container } from './styles';
import whatShouldMaskGirl from '../../assets/images/what_should_mask_girl.png';
import whatshouldwashhand from '../../assets/images/what_should_wash_hand.png';
import whatShouldUseNoise from '../../assets/images/what_should_use_noise.png';
import whatShouldAvoid from '../../assets/images/what_should_avoid.png';


export function WhatShouldWeDo() {
  return (
    <Container>
      <Title mainTitle="Covid-19" subTitle="What  should we do" />
      <p>
        Corona viruses are a type of virus. There are many different kinds, and some cause disease. 
        A newly identified type has caused
      </p>

      <WhatShouldItens 
        itemNumber="01" 
        title="Wear Masks"
        text="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively"
        imageItem={whatShouldMaskGirl} 
        imageAlt="What Should Mask Girl"
        position="left" 
      />
      <WhatShouldItens 
        itemNumber="02" 
        title="Wash your hands"
        text="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively Continually seize impactful vortals"
        imageItem={whatshouldwashhand} 
        imageAlt="What Should Wash Hand"
        position="right" 
      />
      <WhatShouldItens 
        itemNumber="03" 
        title="Use Noise - Rag"
        text="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic 'outside the box' thinking. Objectively"
        imageItem={whatShouldUseNoise} 
        imageAlt="what Should use Noise"
        position="left" 
      />
      <WhatShouldItens 
        itemNumber="04" 
        title="Avoid Contacts"
        text="Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic"
        imageItem={whatShouldAvoid} 
        imageAlt="what Should Avoid"
        position="right" 
      />
    </Container>
  )
}
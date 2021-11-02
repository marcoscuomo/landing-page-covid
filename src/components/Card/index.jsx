import Image from 'next/image';
import { Container } from './styles';

export function Card({img, alt, title, text}) {
  return(
    <Container>
      <Image src={img} alt={alt} />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>   
      </div>
    </Container>
  )
}
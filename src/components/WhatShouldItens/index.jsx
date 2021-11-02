import Image from 'next/image';

import { Container, ContinerText, ItemNumber, Title } from "./styles";

export function WhatShouldItens({ itemNumber, title, text, imageItem, imageAlt, position }) {
  return (
    <Container className={position}>
      <ContinerText>
        <ItemNumber>{itemNumber}</ItemNumber>
        <div>
          <Title>{title}</Title>
          <p>{text}</p>
        </div>
      </ContinerText>
      <Image src={imageItem} alt={imageAlt} />
    </Container>
  )
}
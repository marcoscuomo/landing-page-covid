import React from 'react';
import { Container } from './styled';

export function Title({mainTitle, subTitle}) {
  return (
    <Container>
      <h1>{mainTitle}</h1>
      <h2>{subTitle}</h2>
    </Container>
  );
}
import Link from 'next/link';

import { Container,  Copyright, DevelopBy } from './styles';

export function Footer() {
  return(
    <Container>
      <Copyright>
        © Copyright 2000-2021 who.int | All rights reserved.
      </Copyright>
      <DevelopBy>
        Developed by  
        <Link href="http://www.marcossouza.me">
         <a target="_blank" rel="noopener noreferrer"> Marcos Souza</a>
        </Link>
      </DevelopBy>
    </Container>
  )
}
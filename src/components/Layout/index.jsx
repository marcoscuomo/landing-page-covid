import React from 'react';

import { Grid } from './styles';
import { Header } from '../Header';
import {WhatIsCovid} from '../WhatIsCovid';
import { Contagion } from '../Contagion';
import { Main } from '../Main';

export function Layout() {
  return (
    <Grid>
      <Header />
      <Main>
        <WhatIsCovid /> 
        <Contagion />
      </Main>
    </Grid>
  );
}
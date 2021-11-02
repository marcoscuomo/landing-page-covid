import React from 'react';

import { Grid } from './styles';
import { Header } from '../Header';
import {WhatIsCovid} from '../WhatIsCovid';
import { Contagion } from '../Contagion';
import { Main } from '../Main';
import { Symptomps } from '../Symptomps';
import { WhatShouldWeDo } from '../WhatShouldWeDo';
import { Footer } from '../Footer';

export function Layout() {
  return (
    <Grid>
      <Header />
      <Main>
        <WhatIsCovid /> 
        <Contagion />
        <Symptomps />
        <WhatShouldWeDo />
      </Main>
      <Footer />
    </Grid>
  );
}
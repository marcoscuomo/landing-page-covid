import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-rows: 830px auto 215px;

  grid-template-areas: 
  'HEADER'
  'MAIN' 
  'FOOTER';

  width: 100vw;
`;
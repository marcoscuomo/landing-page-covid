import styled from "styled-components";

export const Container = styled.div`
  grid-area: FOOTER;
  margin-top: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  color: var(--gray-300);
  font-size: 0.8rem;
`;

export const Copyright = styled.div`
  margin-right: 30px;
`;

export const DevelopBy = styled.div`
  a {
    text-decoration: none;
    color: var(--orange-200);
    font-weight: bold ;
  }
`; 

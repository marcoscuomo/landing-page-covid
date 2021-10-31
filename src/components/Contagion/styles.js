import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:first-child {
    text-align: center;
  }
`;

export const TextInfo = styled.div`
  margin-top: 30px; 

  p {
    color: var(--gray-300);
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 30px;
`;
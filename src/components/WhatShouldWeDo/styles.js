import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 90px;

  div {
    text-align: center;
  }

  p {
    color: var(--gray-300);
    margin-top: 15px;
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
    width: 650px;
    text-align: center;
  }
`;
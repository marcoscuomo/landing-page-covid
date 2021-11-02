import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 730px;
    color: var(--gray-300);
    font-size: 0.9rem;
    margin-top: 30px;
    letter-spacing: 1.5px;
    line-height: 1.5;
    text-align: center;
  }
`;
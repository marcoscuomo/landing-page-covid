import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 400px;
  }

  &.right {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

`;

export const ContinerText = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0 100px;

  div p {
    width: 400px;

    text-align: left;
    margin-left: 20px;
    line-height: 30px;
  }
`;

export const ItemNumber = styled.span`
  background: var(--orange-100);
  color: var(--orange-150);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  
  font-size: 1.4rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--green-300);
  text-align: left;
  margin-left: 20px;
`;
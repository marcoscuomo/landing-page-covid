import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  box-shadow: 0px 35px 87px rgba(0, 0, 0, 0.11);
  position: relative;
  background: #fff;
  z-index: 10;

  width: 390px;
  height: 575px;

  &:first-child {
    border-bottom: 6px solid var(--orange-200);
  }

  transition: all ease .5s;

  &:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  div h1 {
    color: var(--green-300);
    letter-spacing: 1px;
    text-align: center;
  }

  div p {
    color: var(--gray-300);
    margin-top: 15px;
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
    width: 300px;
    text-align: center;
  }
`;
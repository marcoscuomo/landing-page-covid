import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 600px;
  }
`;

export const WhatIsCovidContainer = styled.div`
  width: 550px;

  h2 {
    color: var(--orange-200);
    font-size: 1.3rem;
  }

  h3 {
    color: var(--green-300);
    font-size: 2.2rem;
    margin-top: 10px;
  }

  p {
    color: var(--gray-300);
    margin-top: 15px;
    letter-spacing: 1px;
    line-height: 1.5;
    font-size: .9rem;
    margin-bottom: 20px;
  }

  a {
    background: var(--orange-100);
    color: var(--orange-150);
    padding: 18px 30px;
    border-radius: 65px;
    transition: all ease .5s;
    text-decoration: none;
  }

  a:hover {
    filter: opacity(75%);
    cursor: pointer;
  }
`;
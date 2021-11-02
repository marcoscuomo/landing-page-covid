import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: hidden;
`;

export const Info  = styled.div`

  width: 660px;

  h1 {
    color: var(--orange-200);
    font-weight: bold;
    font-size: 1.5rem;
  }

  h2 {
    color: var(--green-300);
    font-weight: bold;
    font-size: 2.5rem;
    margin-top: 5px;
    letter-spacing: 1px;
  }

  p {
    color: var(--gray-300);
    font-size: 0.9rem;
    margin: 30px 0;
    letter-spacing: 1.5px;
    line-height: 1.5;
  }

  a {
    display: block;
    text-align: center;
    width: 200px;
    padding: 25px 0;
    background: var(--orange-200);
    color: #fff;
    border-radius: 65px;
    font-size: 1.1rem;
    text-decoration: none;
    transition: all ease .5s;
  }

  a:hover {
    filter: opacity(75%);
    cursor: pointer;
  }
`;

export const ArtBanner = styled.div`
  margin-top: 30px;
`;

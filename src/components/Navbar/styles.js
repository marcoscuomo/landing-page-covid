import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0px;
  left: 0;
  z-index: 30;
  width: 100%;
  padding: 10px 80px;
  transition: all ease .5s;

  &.fixed {
    background: rgba(0, 0, 0, 0.1);
  }

  a {
    cursor: pointer;
  }
  .active {
    color: var(--orange-200);
  }
`;

export const Menu = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 60px;

  ul {
    list-style: none;
    display: flex;
    margin-right: 50px;

    li a {
      color: var(--green-300);
      text-decoration: none;
      transition: all ease .5s;
    }

    li a:hover {
      filter: opacity(50%);
      cursor: pointer;
    }

    li + li {
      margin-left: 50px;
    }

    li.active {
      color: var(--orange-200);
    }
  }

  .contact {
    background: transparent;
    padding: 10px 30px;
    color: var(--orange-200);
    border: solid 2px var(--orange-200);
    border-radius: 20px;
    transition: all ease .5s;
    text-decoration: none;
  }

  .contact:hover {
    cursor: pointer;
    background: var(--orange-200);
    color: var(--white);
  }

`;
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  *, button, input {  
    border: 0;
    outline: 0;
  }

  :root {
    --black: #000000;
    --gray-300: #4B4F51;
    --green-300: #035755;
    --orange-100: #fee6e5;
    --orange-150: #fa5652;
    --orange-200: #FB4C47;
    --white: #ffffff;
  }

`;
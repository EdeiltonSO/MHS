import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    height: 100%;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Calibri', sans-serif;
    background: rgb(25, 23, 37);
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1, h2 {
      font-family: 'Segoe UI Light', sans-serif;
    }
  }

  button {
    font-family: 'Calibri', sans-serif;
    cursor: pointer;
    user-select: none;
  }
`;

export default GlobalStyle;

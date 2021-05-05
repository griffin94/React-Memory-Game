import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
  }
`;

export default GlobalStyle;

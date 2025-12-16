import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #0b0d17;
    color: #ffffff;
  }

  button {
    font-family: inherit;
  }
`;

export default GlobalStyles;

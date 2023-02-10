import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}

* {
    --color-primary: #F4AA3C;
    --color-black: #222222;
    --color-white: #FFFFFF;
    --color-gray: #BCBCBC;
    --color-lightgray: #EEEEEE;
    ::selection {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
}

  body {
    font-family: 'Roboto', sans-serif;
    width: 500px;
    margin: auto;
    background-color: #eee;
  }
  #root {
    width: 100%;
    height: 100vh;
    background-color: #fff;
  }
  a {
    text-decoration: none;
    color: var(--color-gray);
  }
`;

export default GlobalStyles;

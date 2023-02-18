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
    --color-brown: #6B4D29;
    --width-inner : 425px;
    --margin-bottom : 72px;
    ::selection {
      background-color: var(--color-primary);
      color: var(--color-white);
    }
    input:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #fff inset ; -webkit-text-fill-color: #000; }
    input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
}

  body {
    font-family: 'Roboto', sans-serif;
    width: 500px;
    margin: auto;
    background-color: #eee;
  }
  #root {
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
  }

`;

export default GlobalStyles;

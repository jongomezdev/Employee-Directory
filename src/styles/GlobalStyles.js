import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --blue: #190087;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

body {
  font-size: 1.5rem;
  text-align: center;
}

 /* Scrollbar Styles */
 body::-webkit-scrollbar {
    width: 20px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--blue) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

h1 {
  font-size: 3rem;
  padding-top: 10rem;
  padding-bottom: 10rem;
}

img {
  border-radius: 50%;
  border: 4px solid #fff;

}

`;

export default GlobalStyles;

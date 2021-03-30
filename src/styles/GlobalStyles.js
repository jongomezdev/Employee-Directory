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

`;

export default GlobalStyles;

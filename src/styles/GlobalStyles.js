import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --blue: #190087;
    --white: #fff;
    --grey: #efefef;
  }

body {
  font-size: 1.5rem;
  text-align: center;
}

button {
  margin-left: 1rem;
  border: none;
  background: transparent;
  color: var(--white);
}

button:hover {
  background-color: var(--grey);
  color: #3e00b3;
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

.header {
  background-color: #3e00b3;
  color: #fff;
}

`;

export default GlobalStyles;

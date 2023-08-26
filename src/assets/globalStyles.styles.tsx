import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  
  *, 
  *::after, 
  *::before {
    margin: 0;
	  padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6em;
    overflow-x: hidden;
    height: 100vh;
  }
`;

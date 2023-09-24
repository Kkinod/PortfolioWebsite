import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --navbar-height: 4rem;
    --header-padding-top-bottom: 2rem;
    --header-padding-left-right: 3rem;
  }
  
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
    overflow-x: hidden;
    background: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
  }
`;

import styled from 'styled-components/macro';
import { breakpoints } from '../../../../styles/breakpoints';

export const StyledQuoteSectionContainer = styled.div`
  width: 30%;
  height: 15%;

  @media (max-width: ${breakpoints.desktop1700}) {
    height: 25%;
  }
`;

export const StyledH2 = styled.h2`
  position: absolute;
  top: 35%;
  left: 60%;
  font-size: 3.8rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;

  @media (max-width: ${breakpoints.hdDesktop}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${breakpoints.desktop1700}) {
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2.1rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    font-size: 2rem;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-left: 0.5rem;
`;

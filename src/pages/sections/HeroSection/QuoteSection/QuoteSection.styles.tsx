import styled from 'styled-components/macro';
import { breakpoints } from '../../../../styles/breakpoints';

export const StyledQuoteSectionContainer = styled.div`
  width: 30%;
  height: 15%;

  @media (max-width: ${breakpoints.desktop1700}) {
    height: 25%;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    position: absolute;
    top: 23%;
    right: 5%;
    height: auto;
    width: auto;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    top: 28%;
    //left: 55%;
  }
`;

export const StyledH2 = styled.h2`
  position: absolute;
  top: 35%;
  right: 10%;
  width: 47rem;
  font-size: 3.8rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;

  @media (max-width: ${breakpoints.DKDesktop}) {
    right: 5%;
  }

  @media (max-width: ${breakpoints.hdDesktop}) {
    right: 3%;
    width: 43rem;
    font-size: 3.5rem;
  }

  @media (max-width: ${breakpoints.desktop1700}) {
    width: 33rem;
    font-size: 2.6rem;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 26rem;
    font-size: 2.1rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    width: 24rem;
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.smallDesktop}) {
    width: 20.5rem;
    font-size: 1.65rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    width: 15rem;
    font-size: 1.24rem;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    position: relative;
    right: 0;
    width: 13rem;
    font-size: 1rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    width: 10rem;
    font-size: 0.8rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    width: 7.5rem;
    font-size: 0.6rem;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-left: 0.5rem;

  @media (max-width: ${breakpoints.smallDesktop}) {
    font-size: 0.85rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    font-size: 0.7rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    font-size: 0.5rem;
  }
`;

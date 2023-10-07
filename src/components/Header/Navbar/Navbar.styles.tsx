import styled from 'styled-components/macro';
import { breakpoints } from '../../../styles/breakpoints';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  margin: 0 auto;

  @media (max-width: ${breakpoints.smallDesktop}) {
    height: var(--navbar-height-middle);
  }
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1.7rem;
  }
`;

export const ToggleBtn = styled.div`
  display: none;
  margin-left: 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: color 0.5s linear;

  @media (max-width: ${breakpoints.smallDesktop}) {
    display: block;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${breakpoints.smallDesktop}) {
    display: none;
  }
`;

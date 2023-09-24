import styled from 'styled-components/macro';
import { breakpoints } from '../../../styles/breakpoints';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navbar-height);
  margin: 0 auto;

  @media (max-width: ${breakpoints.smallDesktop}) {
    justify-content: flex-end;
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
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.5s linear;

  @media (max-width: ${breakpoints.smallDesktop}) {
    display: block;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: ${breakpoints.smallDesktop}) {
    display: none;
  }
`;

import styled from 'styled-components/macro';

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85rem;
  height: 60px;
  margin: 0 auto;

  @media (max-width: 992px) {
    justify-content: flex-end;
  }
`;

export const ToggleBtn = styled.div`
  display: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.5s linear;

  @media (max-width: 992px) {
    display: block;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

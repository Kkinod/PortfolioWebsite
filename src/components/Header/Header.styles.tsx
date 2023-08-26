import styled from 'styled-components';

export const HeaderStyled = styled.header`
  //position: fixed;
  //z-index: 200;
  //width: 100%;
  //top: 0;
  //left: 0;
  //
  //display: flex;
  //justify-content: center;
  //align-items: center;
  padding: 0 2rem;
`;

export const Navbar = styled.nav`
  background: blue;
  height: 60px;

  // w sumie nie wiem czy u mnie to po coś się przyda
  max-width: 1200px;
  margin: 0 auto;
  //

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    justify-content: flex-end;
  }
`;

export const LiStyled = styled.li`
  color: black;
  font-size: 1rem;

  &:hover {
    color: grey;
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const ToggleBtn = styled.div`
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 2rem;
  width: 300px;
  background: rgba(255, 255, 255, 0.1);
`;

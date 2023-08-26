import styled from 'styled-components';

interface IDropdown {
  isOpen: boolean;
}

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

export const Dropdown = styled.div<IDropdown>`
  display: none;
  position: absolute;
  right: 2rem;
  width: 300px;

  height: ${(props) => (props.isOpen ? '288px' : '0px')};

  background: rgba(180, 180, 180, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${LiStyled} {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 992px) {
    display: block;
  }

  @media (max-width: 576px) {
    left: 2rem;
    width: unset;
  }
`;

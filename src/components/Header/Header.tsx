import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
  Dropdown,
  HeaderStyled,
  LiStyled,
  Navbar,
  ToggleBtn,
  UlStyled,
} from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [styleChange, setStyleChange] = useState(false);

  const changeNavbarStyles = () => {
    if (window.scrollY >= 60) {
      setStyleChange(true);
    } else {
      setStyleChange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarStyles);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderStyled styleChange={styleChange}>
      <Navbar>
        {/* <div>Donikk</div> */}
        <UlStyled>
          <LiStyled>Home</LiStyled>
          <LiStyled>About</LiStyled>
          <LiStyled>Resume</LiStyled>
          <LiStyled>Portfolio</LiStyled>
          <LiStyled>Blog</LiStyled>
          <LiStyled>Contact</LiStyled>
        </UlStyled>
        <ToggleBtn onClick={handleToggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </ToggleBtn>
      </Navbar>

      <Dropdown isOpen={isOpen}>
        <LiStyled>Home</LiStyled>
        <LiStyled>About</LiStyled>
        <LiStyled>Resume</LiStyled>
        <LiStyled>Portfolio</LiStyled>
        <LiStyled>Blog</LiStyled>
        <LiStyled>Contact</LiStyled>
      </Dropdown>
    </HeaderStyled>
  );
};

export default Header;

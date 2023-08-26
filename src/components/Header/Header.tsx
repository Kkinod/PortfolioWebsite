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
  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <header className="st-site-header st-style1 st-sticky-header">
    <HeaderStyled>
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

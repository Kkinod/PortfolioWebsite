import { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Navbar from './Navbar/Navbar';
import { HeaderStyled } from './Header.styles';

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
    <HeaderStyled $styleChange={styleChange}>
      <Navbar handleToggleMenu={handleToggleMenu} />
      <Dropdown isOpen={isOpen} />
    </HeaderStyled>
  );
};

export default Header;

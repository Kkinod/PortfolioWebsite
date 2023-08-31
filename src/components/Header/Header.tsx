import { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Navbar from './Navbar/Navbar';
import useScrollPosition from '../../shared/hooks/useScrollPosition';
import { HeaderStyled } from './Header.styles';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const styleChange = useScrollPosition();

  const handleToggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <HeaderStyled $styleChange={styleChange} className="headerr">
      <Navbar handleToggleMenu={handleToggleMenu} />
      <Dropdown isOpen={isOpen} />
    </HeaderStyled>
  );
};

export default Header;

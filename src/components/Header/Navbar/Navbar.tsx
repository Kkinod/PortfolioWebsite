import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { sections } from '../../../shared/constants/labels';
import { LiStyled } from '../Header.styles';
import { NavStyled, ToggleBtn, UlStyled } from './Navbar.styles';
import Toggle from '../../Toggler/Toggler';
import { ThemeTogglerContext } from '../../../shared/contexts/ThemeTogglerContext';

interface INavbar {
  handleToggleMenu: () => void;
}
const Navbar = ({ handleToggleMenu }: INavbar) => {
  const toggleTheme = useContext(ThemeTogglerContext);

  return (
    <NavStyled>
      <UlStyled>
        {sections.map((section) => {
          return <LiStyled key={section}>{section}</LiStyled>;
        })}
      </UlStyled>
      <Toggle toggleTheme={toggleTheme} />
      <ToggleBtn onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleBtn>
    </NavStyled>
  );
};

export default Navbar;

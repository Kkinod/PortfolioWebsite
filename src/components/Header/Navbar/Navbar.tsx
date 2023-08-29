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
  const { theme, themeToggler } = useContext(ThemeTogglerContext);

  return (
    <NavStyled>
      <div>donikk</div>
      <UlStyled>
        {sections.map((section) => {
          return <LiStyled key={section}>{section.toUpperCase()}</LiStyled>;
        })}
      </UlStyled>
      <Toggle toggleTheme={themeToggler} theme={theme} />
      <ToggleBtn onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleBtn>
    </NavStyled>
  );
};

export default Navbar;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { sections } from '../../../shared/constants/labels';
import { LiStyled } from '../Header.styles';
import { NavStyled, ToggleBtn, UlStyled } from './Navbar.styles';

import { ThemeTogglerContext } from '../../../shared/contexts/ThemeTogglerContext';
import DarkLightBtn from '../../DarkLightBtn/DarkLightBtn';

interface INavbar {
  handleToggleMenu: () => void;
}
export const Navbar = ({ handleToggleMenu }: INavbar) => {
  const { theme, themeToggler } = useContext(ThemeTogglerContext);

  return (
    <NavStyled>
      <div>donikk</div>
      <UlStyled>
        {sections.map((section) => {
          return <LiStyled key={section}>{section.toUpperCase()}</LiStyled>;
        })}
      </UlStyled>
      <DarkLightBtn toggleTheme={themeToggler} theme={theme} />
      <ToggleBtn onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleBtn>
    </NavStyled>
  );
};

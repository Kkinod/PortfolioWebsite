import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { sections } from '../../../shared/labels';
import { LiStyled } from '../Header.styles';
import { NavStyled, ToggleBtn, UlStyled } from './Navbar.styles';

interface INavbar {
  handleToggleMenu: () => void;
}
const Navbar = ({ handleToggleMenu }: INavbar) => {
  return (
    <NavStyled>
      <UlStyled>
        {sections.map((section) => {
          return <LiStyled key={section}>{section}</LiStyled>;
        })}
      </UlStyled>
      <ToggleBtn onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </ToggleBtn>
    </NavStyled>
  );
};

export default Navbar;

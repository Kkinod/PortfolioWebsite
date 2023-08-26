import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  Dropdown,
  HeaderStyled,
  LiStyled,
  Navbar,
  ToggleBtn,
  UlStyled,
} from './Header.styles';

const Header = () => {
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
        <ToggleBtn>
          <FontAwesomeIcon icon={faBars} />
        </ToggleBtn>
      </Navbar>

      <Dropdown>
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

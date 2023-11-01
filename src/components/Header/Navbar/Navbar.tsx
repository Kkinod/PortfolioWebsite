import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { labels, sections } from '../../../shared/constants/labels';
import { LiStyled } from '../Header.styles';
import {
  StyledDiv,
  StyledNav,
  StyledSpan,
  StyledUl,
  ToggleBtn,
} from './Navbar.styles';

import { ThemeTogglerContext } from '../../../shared/contexts/ThemeTogglerContext';
import DarkLightBtn from '../../DarkLightBtn/DarkLightBtn';

interface INavbar {
  handleToggleMenu: () => void;
}

export const Navbar = ({ handleToggleMenu }: INavbar) => {
  const { theme, themeToggler } = useContext(ThemeTogglerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.9, delay: 0.25 }}
    >
      <StyledNav>
        <StyledSpan>{labels.general.name.toLowerCase()}</StyledSpan>
        <StyledUl>
          {sections.map((section) => {
            return <LiStyled key={section}>{section.toUpperCase()}</LiStyled>;
          })}
        </StyledUl>
        <StyledDiv>
          <DarkLightBtn toggleTheme={themeToggler} theme={theme} />
          <ToggleBtn onClick={handleToggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleBtn>
        </StyledDiv>
      </StyledNav>
    </motion.div>
  );
};

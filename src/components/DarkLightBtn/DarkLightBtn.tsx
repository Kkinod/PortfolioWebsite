import dark from '../../assets/dark-light/Dark.svg';
import light from '../../assets/dark-light/Light.svg';
import { StyledButton, StyledImg } from './DarkLightBtn.styles';

const DarkLightBtn = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) => {
  return (
    <StyledButton onClick={toggleTheme}>
      <StyledImg src={theme === 'light' ? dark : light} alt="" />
    </StyledButton>
  );
};

export default DarkLightBtn;

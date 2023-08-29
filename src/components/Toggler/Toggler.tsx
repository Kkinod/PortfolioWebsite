import styled from 'styled-components/macro';
import dark from '../../assets/dark-light/Dark.svg';
import light from '../../assets/dark-light/Light.svg';

const Button = styled.button`
  background: ${({ theme }) => theme.text};
  //border: 2px solid ${({ theme }) => theme.toggleBorder};
  width: 2rem;
  height: 2rem;
  border: none;
  color: ${({ theme }) => theme.text};
  border-radius: 50px;
  cursor: pointer;
  font-size:0.8rem;
  //padding: 0.6rem;
  transition: all 0.50s linear;
  margin: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  
  }
`;

const Img = styled.img`
  width: 1.5rem;
`;

const Toggle = ({
  toggleTheme,
  theme,
}: {
  toggleTheme: () => void;
  theme: string;
}) => {
  return (
    <Button onClick={toggleTheme}>
      <Img src={theme === 'light' ? dark : light} alt="" />
    </Button>
  );
};

export default Toggle;

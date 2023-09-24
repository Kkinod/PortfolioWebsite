import styled from 'styled-components/macro';
import { LiStyled } from '../Header.styles';
import { breakpoints } from '../../../styles/breakpoints';

interface IWrapper {
  $isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: none;
  position: absolute;
  right: 2rem;
  width: 300px;
  height: ${(props) => (props.$isOpen ? '288px' : '0px')};
  background: rgba(180, 180, 180, 0.1);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  box-shadow: 0 5px 16px -6px rgba(66, 68, 90, 1);
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${LiStyled} {
    padding: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.smallDesktop}) {
    display: block;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    left: 2rem;
    width: unset;
  }
`;

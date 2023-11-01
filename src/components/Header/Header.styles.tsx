import styled from 'styled-components/macro';
import { breakpoints } from '../../styles/breakpoints';

interface IHeader {
  $styleChange: boolean;
}

export const HeaderStyled = styled.header<IHeader>`
  contain: layout;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props) =>
    props.$styleChange
      ? '0 var(--header-padding-left-right)'
      : 'var(--header-padding-top-bottom) var(--header-padding-left-right)'};
  box-shadow: ${(props) =>
    props.$styleChange ? '0 1px 16px -6px rgba(66, 68, 90, 1)' : ''};
  transition: 0.4s;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.$styleChange ? 'rgba(180, 180, 180, 0.1)' : ''};
    backdrop-filter: blur(15px);
    z-index: -1;
  }

  @media (max-width: ${breakpoints.smallDesktop}) {
    padding: ${(props) =>
      props.$styleChange
        ? '0 var(--header-padding-left-right)'
        : 'var(--header-padding-top-bottom-middle) var(--header-padding-left-right-middle)'};
  }

  @media (max-width: ${breakpoints.smallPhone}) {
    padding: ${(props) =>
      props.$styleChange
        ? '0 var(--header-padding-left-right)'
        : 'var(--header-padding-top-bottom-small) var(--header-padding-left-right-middle)'};
  }
`;

export const LiStyled = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
  }
`;

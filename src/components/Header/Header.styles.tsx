import styled from 'styled-components/macro';

interface IHeader {
  $styleChange: boolean;
}

export const HeaderStyled = styled.header<IHeader>`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props) =>
    props.$styleChange
      ? '0 var(--header-padding-left-right)'
      : 'var(--header-padding-top-bottom) var(--header-padding-left-right)'};
  background: ${(props) =>
    props.$styleChange ? 'rgba(180, 180, 180, 0.1)' : ''};
  backdrop-filter: blur(15px);
  box-shadow: ${(props) =>
    props.$styleChange ? '0 1px 16px -6px rgba(66, 68, 90, 1)' : ''};
  transition: 0.4s;
`;

export const LiStyled = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  cursor: pointer;
`;

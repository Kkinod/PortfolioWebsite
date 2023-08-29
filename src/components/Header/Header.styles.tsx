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
  padding: 0 2rem;
  background: ${(props) => (props.$styleChange ? '#dad9d9' : '')};
`;

export const LiStyled = styled.li`
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &:hover {
    color: grey;
  }
`;

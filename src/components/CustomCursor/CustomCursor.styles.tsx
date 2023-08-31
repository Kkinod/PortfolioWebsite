import styled from 'styled-components/macro';

export const CustomCursorStyled = styled.div`
  position: fixed;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  z-index: 9999;

  width: 20px;
  height: 20px;
  background-color: white;
  left: 0;
  top: 0;
  pointer-events: none;

  @media (max-width: 991px) {
    display: none !important;
  }
`;

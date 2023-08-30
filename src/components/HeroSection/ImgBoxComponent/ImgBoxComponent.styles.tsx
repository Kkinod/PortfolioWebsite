import styled from 'styled-components/macro';

export const ImgBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ImgHero = styled.img`
  position: relative;
  bottom: 0;
  height: 100%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mainMotive};
  transform: translate(-50%, -50%);
`;

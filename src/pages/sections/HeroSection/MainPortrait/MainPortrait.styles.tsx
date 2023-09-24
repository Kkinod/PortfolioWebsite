import styled from 'styled-components/macro';

export const StyledContainer = styled.div`
  width: 40%;
  height: 100%;
`;

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
  align-self: flex-end;
`;

export const Circle = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.mainMotive};
  transform: translate(-50%, -50%);
`;

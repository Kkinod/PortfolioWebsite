import styled from 'styled-components/macro';
import { breakpoints } from '../../../../styles/breakpoints';

export const StyledContainer = styled.div`
  width: 35%;
  height: 100%;

  @media (max-width: ${breakpoints.hdDesktop}) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.desktop1700}) {
    width: 55%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 60%;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    width: 65%;
  }
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

import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { breakpoints } from '../../../../styles/breakpoints';

export const StyledContainer = styled(motion.div)`
  width: 35%;
  height: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    width: 65%;
  }

  @media (max-height: ${breakpoints.tabletPortrait500}) {
    width: 45%;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    height: 0;
    width: 85%;
    flex-grow: 1;
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

  @media (max-width: ${breakpoints.phoneMedium}) {
    top: 40%;
  }
`;

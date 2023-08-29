import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';

export const HeroSectionStyled = styled.section`
  //height: calc(100vh - 60px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 5%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: calc(100% / 3);
`;

export const TextWrapper = styled(Wrapper)``;
export const RightTextWrapper = styled(Wrapper)``;

export const SpanTopLine = styled.span`
  position: relative;
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  letter-spacing: 5px;

  &::after {
    position: absolute;
    content: '';
    height: 4px;
    width: 45px;
    bottom: 0;
    background-color: ${({ theme }) => theme.text};
  }
`;

export const H1Styled = styled.h1`
  display: block;
  color: ${({ theme }) => theme.reverseAccentBackground};
  font-size: 3em;
  font-weight: 900;
`;

export const SpanMultiText = styled.span`
  color: ${({ theme }) => theme.reverseAccentBackground};
  text-transform: capitalize;
`;

export const ParagraphStyled = styled.p`
  display: block;
  width: 90%;
  font-size: 1.2em;
  color: ${({ theme }) => theme.text};
`;

export const ImgWrapper = styled(Wrapper)`
  height: calc(100vh - 60px);
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const animateUser = keyframes`
  50% {
    right: 30px;
    top: 10px;
  }
`;

const animateSplash = keyframes`
  50% {
    right: 49%;
    top: 51%;
    width: 155%;
  }
`;

export const ImgStyled = styled.img`
  position: relative;
  height: 100%;
  //width: calc(130% - 60px);
  //top: -100px;
  right: 50px;
`;

export const ImgHero = styled(ImgStyled)`
  //animation: ${animateUser} 4s linear infinite;
`;

export const ImgSplash = styled(ImgStyled)`
  position: absolute;
  top: 50%;
  left: 50%;
  //transform: translate(-50%, -50%) rotate(-35deg);
  transform: translate(-50%, -50%);
  width: 160%;
  filter: saturate(200%);
  //animation: ${animateSplash} 4s linear infinite;
`;

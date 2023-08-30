import styled from 'styled-components/macro';
import { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ILinkedStyled {
  $bgColor: string;
}

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

export const Wrapper = styled.div``;

export const LeftWrapper = styled(Wrapper)`
  width: 30%;
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

// social
export const SocialBox = styled.div`
  //background-color: #101624;
  //background-color: #101624;
  //border: 1px solid #232935;
  //border-right: 0;
  //border-radius: 50px 0 0 50px;
  //height: 80px;
  //width: 448px;
  //display: flex;
  //align-items: center;
  ////position: absolute;
  ////bottom: 30px;
  //padding-left: 12px;
  //right: 100%;
`;

export const SocialLinksBox = styled.div`
  display: flex;
`;

export const SocialIconName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  //overflow: hidden;
  max-width: 0;
  transition: all 0.5s ease;
`;

export const SocialIcon = styled.span`
  color: ${({ theme }) => theme.reverseBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  text-align: center;
  transition: all 0.4s ease;
`;

export const IconStyled = styled(Icon)`
  //width: 30px;
  //height: 30px;
  scale: 1.5;
`;

export const LinkStyled = styled(Link)<ILinkedStyled>`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.accentBackground};
  //border: 0.5px solid #3f4551;
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 5px 7px 10px
    rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    padding-right: 15px;
    //width: 200px;
    > ${SocialIconName} {
      max-width: 140px;
    }

    > ${SocialIcon} {
      background: ${(props) => (props.$bgColor ? props.$bgColor : '')};
      margin-right: 5px;
      color: white;
    }
  }
`;

//
export const RightTextWrapper = styled(Wrapper)`
  width: 30%;
`;

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
  width: 40%;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
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

const ImgStyled = styled.img`
  position: relative;
  height: 100%;
  //width: calc(130% - 60px);
  bottom: 0;
  //right: 50px;
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
  //width: 160%;
  filter: saturate(200%);
  //animation: ${animateSplash} 4s linear infinite;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 40vw;
  width: 40vw;
  background-color: ${({ theme }) => theme.mainMotive};
  border-radius: 50%;
`;

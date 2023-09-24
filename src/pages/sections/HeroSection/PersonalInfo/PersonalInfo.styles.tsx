import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { breakpoints } from '../../../../styles/breakpoints';

interface ILinkedStyled {
  $bgColor: string;
}

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  height: 90%;
`;

export const StyledWrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: 20%;

  @media (max-width: ${breakpoints.desktop1700}) {
    width: 80%;
  }
`;

export const SocialBox = styled.div`
  display: flex;
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

export const SocialIconName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  max-width: 0;
  transition: all 0.5s ease;
`;

export const IconStyled = styled(Icon)`
  scale: 1.5;
`;

export const LinkStyled = styled(Link)<ILinkedStyled>`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.accentBackground};
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
    > ${SocialIconName} {
      max-width: 140px;
    }

    > ${SocialIcon} {
      background: ${(props) => (props.$bgColor ? props.$bgColor : '')};
      margin-right: 5px;
      color: white;
    }

    &:hover {
      box-shadow: 0 1rem 2rem
        rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);
      transform: translateY(-3px);
    }

    &:active {
      outline: none;
      box-shadow: 0 0.25rem 0.5rem
        rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);
      transform: translateY(-1px);
    }
  }
`;

export const SpanTopLine = styled.span`
  position: relative;
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  letter-spacing: 5px;
  transition: all 0.5s linear;

  &::after {
    position: absolute;
    content: '';
    width: 2.4rem;
    height: 4px;
    bottom: 10px;
    background-color: ${({ theme }) => theme.mainMotive};

    @media (max-width: ${breakpoints.desktop}) {
      width: 1.8rem;
      bottom: 8px;
    }

    @media (max-width: ${breakpoints.smallDesktop1024}) {
      width: 1.4rem;
      bottom: 5px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    font-size: 1.6rem;
  }
`;

export const StyledH1 = styled.h1`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 4rem;
  font-weight: 900;
  transition: all 0.5s linear;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    font-size: 2.4rem;
  }
`;

export const SpanMultiText = styled.span`
  color: ${({ theme }) => theme.mainMotive};
  text-transform: capitalize;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
  transition: all 0.5s linear;

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 0.9rem;
  }
`;

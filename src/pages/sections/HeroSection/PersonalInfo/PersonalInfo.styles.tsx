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

  @media (max-width: ${breakpoints.tabletLandscape}) {
    height: 100%;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    height: auto;
    width: 100%;
  }
`;

export const StyledWrapper = styled.div`
  width: 60%;
  margin-top: 10%;
  margin-left: 20%;

  @media (max-width: ${breakpoints.desktop1700}) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.tabletLandscape700}) {
    margin-top: 0;
    margin-left: 10%;
  }
`;

export const SocialBox = styled.div`
  display: flex;

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    position: absolute;
    z-index: 1000;
    bottom: 0.25rem;
    left: 1.5rem;
  }
`;

export const SocialIcon = styled.span`
  color: ${({ theme }) => theme.reverseBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 3.125rem;
  text-align: center;
  transition: all 0.4s ease;

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    min-width: 3.125rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    min-width: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    min-width: 2rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const SocialIconName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  max-width: 0;
  transition: all 0.5s ease;
`;

export const StyledIcon = styled(Icon)`
  scale: 1.5;

  @media (max-width: ${breakpoints.tabletLandscape}) {
    scale: 1.3;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    scale: 1.1;
  }
`;

export const LinkStyled = styled(Link)<ILinkedStyled>`
  border-radius: 3.125rem;
  background-color: ${({ theme }) => theme.accentBackground};
  transition: all 0.4s ease;
  overflow: hidden;
  display: flex;
  align-items: center;
  box-shadow: 0.3125rem 0.5rem 0.625rem
    rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);

  &:not(:last-child) {
    margin-right: 1.25rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    max-width: 3.125rem;
    margin-right: 0;
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    max-width: 2.5rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    max-width: 2rem;
  }

  &:hover {
    padding-right: 1rem;
    box-shadow: 0 1rem 2rem
      rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);
    transform: translateY(-3px);

    > ${SocialIconName} {
      max-width: 8.75rem;
      margin-left: 0.3125rem;
    }

    > ${SocialIcon} {
      background: ${(props) => (props.$bgColor ? props.$bgColor : '')};
      color: white;
    }

    @media (max-width: ${breakpoints.smallDesktop1024}) {
      padding-right: 0;
      max-width: 8.75rem;
    }

    @media (max-width: ${breakpoints.tabletPortrait}) {
      padding-right: 1rem;
    }

    @media (max-width: ${breakpoints.tabletPortrait500}) {
      padding-right: 0;
      max-width: 2.5rem;
    }

    @media (max-width: ${breakpoints.phoneMedium}) {
      max-width: 2rem;
    }
  }

  &:active {
    outline: none;
    box-shadow: 0 0.25rem 0.5rem
      rgba(${({ theme }) => theme.reverseBackgroundRgb}, 0.1);
    transform: translateY(-1px);
  }
`;

export const SpanTopLine = styled.span`
  position: relative;
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  letter-spacing: 0.3125rem;
  transition: all 0.5s linear;

  &::after {
    position: absolute;
    content: '';
    width: 2.4rem;
    height: 0.25rem;
    bottom: 0.625rem;
    background-color: ${({ theme }) => theme.mainMotive};

    @media (max-width: ${breakpoints.desktop}) {
      width: 1.8rem;
      bottom: 0.5rem;
    }

    @media (max-width: ${breakpoints.smallDesktop1024}) {
      width: 1.4rem;
      bottom: 0.3125rem;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    font-size: 1.6rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    font-size: 1.4rem;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.smallPhone}) {
    font-size: 1.3rem;
  }
`;

export const StyledH1 = styled.h1`
  display: block;
  color: ${({ theme }) => theme.text};
  font-size: 4rem;
  font-weight: 900;
  transition: all 0.5s linear;

  @media (max-width: ${breakpoints.desktop1440}) {
    font-size: 3.5rem;
  }

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 3rem;
  }

  @media (max-width: ${breakpoints.smallDesktop1024}) {
    font-size: 2.4rem;
  }

  @media (max-width: ${breakpoints.smallDesktop}) {
    font-size: 1.9rem;
  }

  @media (max-width: ${breakpoints.tabletLandscape}) {
    font-size: 1.5rem;
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    font-size: 2.2rem;
  }

  @media (max-width: ${breakpoints.tabletPortrait500}) {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    font-size: 1.7rem;
  }

  @media (max-width: ${breakpoints.phoneMedium}) {
    font-size: 1.2rem;
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

  @media (max-width: ${breakpoints.phoneMedium}) {
    font-size: 0.6rem;
  }
`;

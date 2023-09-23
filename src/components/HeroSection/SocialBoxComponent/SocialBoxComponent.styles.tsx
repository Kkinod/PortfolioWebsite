import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

interface ILinkedStyled {
  $bgColor: string;
}

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

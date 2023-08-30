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
  //overflow: hidden;
  max-width: 0;
  transition: all 0.5s ease;
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

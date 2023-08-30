import styled from 'styled-components/macro';

export const SpanTopLine = styled.span`
  position: relative;
  display: block;
  color: ${({ theme }) => theme.reverseAccentBackground};
  font-size: 2.5rem;
  letter-spacing: 5px;

  &::after {
    position: absolute;
    content: '';
    width: 2.4rem;
    height: 4px;
    bottom: 10px;
    background-color: ${({ theme }) => theme.mainMotive};
  }
`;

export const H1Styled = styled.h1`
  display: block;
  color: ${({ theme }) => theme.reverseAccentBackground};
  font-size: 3em;
  font-weight: 900;
`;

export const SpanMultiText = styled.span`
  color: ${({ theme }) => theme.mainMotive};
  text-transform: capitalize;
`;

export const ParagraphStyled = styled.p`
  display: block;
  width: 90%;
  color: ${({ theme }) => theme.text};
  font-size: 1.2em;
`;

import styled from 'styled-components/macro';

export const HeroSectionStyled = styled.section`
  //height: calc(100vh - 60px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 10%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  width: 50%;
`;

export const TextWrapper = styled(Wrapper)``;

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
  font-size: 5em;
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

export const ImgWrapper = styled(Wrapper)``;

export const ImgBox = styled.div``;

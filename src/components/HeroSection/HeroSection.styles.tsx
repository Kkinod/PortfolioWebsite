import styled from 'styled-components/macro';

export const HeroSectionStyled = styled.section`
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  height: 90%;
`;

export const MiddleWrapper = styled(Wrapper)`
  width: 40%;
  height: calc(100vh - 60px);
`;

export const RightTextWrapper = styled(Wrapper)`
  width: 30%;
`;

export const H2Styled = styled.h2`
  position: absolute;
  top: 35%;
  left: 60%;
  font-size: 3.8rem;
  color: ${({ theme }) => theme.text};
`;

export const SpanStyled = styled.span`
  color: ${({ theme }) => theme.mainMotive};
`;

export const SpanStyled2 = styled.span`
  color: ${({ theme }) => theme.mainMotive};
`;
export const Signature = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.text};
`;

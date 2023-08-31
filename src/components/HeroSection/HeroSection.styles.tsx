import styled from 'styled-components/macro';

export const HeroSectionStyled = styled.section``;

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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 30%;
  height: 90%;
`;

export const RightTextWrapper = styled(Wrapper)`
  width: 30%;
`;

export const MiddleWrapper = styled(Wrapper)`
  width: 40%;
  height: calc(100vh - 60px);
`;

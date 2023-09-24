import styled from 'styled-components/macro';

export const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(
    100vh - (var(--navbar-height) + (var(--header-padding-top-bottom) * 2))
  );
  padding: 0 var(--header-padding-left-right);
  overflow: hidden;
`;

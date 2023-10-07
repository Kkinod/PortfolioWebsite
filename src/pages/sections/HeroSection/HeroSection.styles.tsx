import styled from 'styled-components/macro';
import { breakpoints } from '../../../styles/breakpoints';

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

  @media (max-width: ${breakpoints.smallDesktop}) {
    height: calc(
      100vh -
        (
          var(--navbar-height-middle) +
            (var(--header-padding-top-bottom-middle) * 2)
        )
    );
    padding: 0 var(--header-padding-left-right-middle);
  }

  @media (max-width: ${breakpoints.tabletPortrait}) {
    flex-direction: column;
  }
`;

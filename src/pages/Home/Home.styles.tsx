import styled from 'styled-components/macro';
import { breakpoints } from '../../styles/breakpoints';

export const StyledMainSection = styled.div`
  padding-top: calc(
    var(--navbar-height) + (var(--header-padding-top-bottom) * 2)
  );

  @media (max-width: ${breakpoints.smallDesktop}) {
    padding-top: calc(
      var(--navbar-height-middle) +
        (var(--header-padding-top-bottom-middle) * 2)
    );
  }
`;

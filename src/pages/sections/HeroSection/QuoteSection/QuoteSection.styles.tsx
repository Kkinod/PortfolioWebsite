import styled from 'styled-components';

export const StyledQuoteSectionContainer = styled.div`
  width: 30%;
`;

export const StyledH2 = styled.h2`
  position: absolute;
  top: 35%;
  left: 60%;
  font-size: 3.8rem;
  color: ${({ theme }) => theme.text};
`;

export const StyledParagraph = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.text};
`;

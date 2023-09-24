import styled from 'styled-components/macro';

export const StyledQuoteSectionContainer = styled.div`
  width: 30%;
  height: 15%;
`;

export const StyledH2 = styled.h2`
  position: absolute;
  top: 35%;
  left: 60%;
  font-size: 3.8rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.5s linear;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  margin-left: 0.5rem;
`;

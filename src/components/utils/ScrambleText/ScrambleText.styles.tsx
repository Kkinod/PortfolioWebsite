import styled from 'styled-components';

export const SpanStyled = styled.span<{ color?: string }>`
  color: ${({ color, theme }) => color || theme.mainMotive};
`;

import styled from 'styled-components/macro';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.text};
  font-size:0.8rem;
  transition: all 0.50s linear;
  cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  width: 1.5rem;
`;

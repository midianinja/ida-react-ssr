import styled, { css } from "styled-components";

const BaseButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.default.borderRadius};
  min-width: 88px;
  color: ${({ theme, variant }) => theme.colors[variant]};
  cursor: pointer;
`;

export const StyledPrimaryButton = styled(BaseButton)`
  background-color: ${({ theme, variant }) => theme.colors[variant]};

  ${props => props.variant === 'primary' && css`
    color: ${({ theme }) => theme.colors.secondary};
  `}

  ${props => props.variant === 'secondary' && css`
    color: ${({ theme }) => theme.colors.accent};

  `}

  ${props => props.variant === 'accent' && css`
    color: ${({ theme }) => theme.colors.secondary};
  `}
`

export const StyledSecondaryButton = styled(BaseButton)`
  border: 2px solid;
  background: transparent;
`

export const StyledTertiaryButton = styled(BaseButton)`
  background: none;
  text-decoration: underline;
  font-size: 12px;
  padding: 16px 24px;
`

export const StyledNavigationButton = styled(BaseButton)`
  background: none;
  text-decoration: none;
  padding: 12px 8px;
  display: flex;
  align-items: center;

`
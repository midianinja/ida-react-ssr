import styled, { css } from "styled-components";

const BaseButton = styled.button`
  border-radius: ${({ theme }) => theme.default.borderRadius};
  color: ${({ theme, variant }) => theme.colors[variant]};
  font-weight: 600;
  font-size: 16px;
  padding: ${({partner}) => partner ? '10px 16px' : '12px 24px'};
  min-width: 88px;
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
`;

export const StyledPrimaryButton = styled(BaseButton)`
  background-color: ${({ theme, variant }) => theme.colors[variant]};

  ${({ variant }) =>
    variant === "primary" &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      color: ${({ theme }) => theme.colors.accent};
    `}

  ${({ variant }) =>
    variant === "accent" &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
      background-color: ${({ theme }) => theme.colors.muted};
    `}
`;

export const StyledSecondaryButton = styled(BaseButton)`
  border: 2px solid;
  background: transparent;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.muted};
      border-color: ${({ theme }) => theme.colors.muted};
    `}
`;

export const StyledTertiaryButton = styled(BaseButton)`
  background: none;
  text-decoration: underline;
  font-size: 12px;
  padding: 16px 24px;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.muted};
    `}
`;

export const StyledNavigationButton = styled(BaseButton)`
  background: none;
  text-decoration: none;
  padding: 12px 8px;
  display: flex;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.muted};
    `}
`;

export const StyledIconButton = styled(StyledSecondaryButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  `
import styled, { css } from "styled-components";

/* font-family: ${({ theme }) => theme.buttons.fonts.body}; */
export const ButtonComponent = styled.button`
  font-weight: 500;
  font-size: ${({ theme }) => theme.buttons.fontSize.default};
  padding: ${({ theme }) => theme.buttons.padding.default};
  border-radius: ${({ theme }) => theme.default.borderRadius}px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme, type }) => theme.buttons[type].background};
`;

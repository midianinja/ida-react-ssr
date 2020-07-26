import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${({theme, type}) => theme.colors[type || "primary"]};
  border-radius: ${({theme}) => theme.default.borderRadius}px;
  padding: ${({theme}) => theme.buttons.padding};
  color: ${({theme}) => theme.colors.secondary};
`;

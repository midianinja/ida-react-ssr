import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${({theme, type}) => theme.dark.colors[type || "primary"]};
  border-radius: ${({theme}) => theme.defaultBox.borderRadius};
  padding: 10px 28px;
  color: ${({theme}) => theme.dark.colors.secondary};
`;

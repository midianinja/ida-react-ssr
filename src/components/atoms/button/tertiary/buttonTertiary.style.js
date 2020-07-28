import styled from "styled-components";
import { ButtonComponent } from "../button.style";

export const ButtonTertiaryComponent = styled(ButtonComponent)`
  background-color: transparent;
  text-decoration: underline;
  color: ${({theme, type}) => theme.colors[type || "primary"]};
  border-radius: ${({theme}) => theme.default.borderRadius}px;
  padding: ${({theme}) => theme.buttons.padding};
`;

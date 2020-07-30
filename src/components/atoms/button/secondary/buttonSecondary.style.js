import styled from "styled-components";
import { ButtonComponent } from "../button.style";

export const ButtonSecondaryComponent = styled(ButtonComponent)`
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-color: ${({theme, type}) => theme.colors[type || "primary"]};
  color: ${({theme, type}) => theme.colors[type || "primary"]};
  border-radius: ${({theme}) => theme.default.borderRadius}px;
  padding: ${({theme}) => theme.buttons.padding};
`;

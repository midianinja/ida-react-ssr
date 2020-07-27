import styled from "styled-components";

export const ButtonComponent = styled.button` 
  /*
    background-color: ${({theme, type}) => theme.colors[type || "primary"]};
    - Removido o parametro de por se tratar de um componte base 
  */
  border-radius: ${({theme}) => theme.default.borderRadius};
  padding: ${({theme}) => theme.buttons.padding};
  color: ${({theme}) => theme.colors.secondary};
`;

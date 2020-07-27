import styled from "styled-components";

export const BodyTextComponent = styled.div`
  font-size: ${({theme, size}) => theme.texts.body.sizes[size || "h1"]}px;
  font-weight: ${({theme}) => theme.texts.body.fontWeight};
  font-family: ${({theme}) => theme.texts.body.fontFamily.join(', ')};
`;

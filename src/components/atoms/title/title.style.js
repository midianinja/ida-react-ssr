import styled from "styled-components";

export const TitleComponent = styled.div`
  font-size: ${({theme, size}) => theme.texts.title.sizes[size || "h1"]}px;
  font-weight: ${({theme}) => theme.texts.title.fontWeight};
  font-family: ${({theme}) => theme.texts.title.fontFamily.join(', ')};
`;

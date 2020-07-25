import styled from "styled-components";

export const TitleComponent = styled.div`
  font-size: ${({theme, type}) => theme.texts[type].size};
  font-weight: ${({theme, type}) => theme.texts.fontWeight};
  font-family: ${({theme, type}) => theme.texts.fontFamily};
`;

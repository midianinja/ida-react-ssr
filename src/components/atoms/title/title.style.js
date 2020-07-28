import styled from "styled-components";

export const TitleComponent = styled.div`
  font-size: ${({theme, size}) => theme.texts.title.sizes[size]}px;
  font-weight: ${({theme}) => theme.texts.title.fontWeight};
  font-family: ${({theme}) => theme.fonts.title};
`;

import styled from "styled-components";

export const BodyTextComponent = styled.div`
  font-weight: ${({theme}) => theme.texts.body.fontWeight};
  font-family: ${({theme}) => theme.texts.body.fontFamily.join(', ')};

  /* Responsivo para mobile? (validar com o grupo) */
  @media only screen and (max-width: ${({theme}) => theme.media.mobile[0]}px){
    font-size: ${({theme, size}) => theme.texts.body.sizes["h4"]}px;
  }

  @media only screen and (min-width: ${({theme}) => theme.media.mobile[0]+1}px){
    font-size: ${({theme, size}) => theme.texts.body.sizes[size || "h1"]}px;
  }
`;

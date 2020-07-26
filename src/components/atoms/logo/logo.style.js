import styled from "styled-components";

export default styled.div`
  width: ${({theme, scale}) => scale * theme.default.logo.color.width}px;
  height: ${({theme, scale}) => scale * theme.default.logo.color.height}px;
  background-image: url(${({theme}) => theme.default.logo.color.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

import styled from "styled-components";

export default styled.div`
  height: 100vh;
  width:  100vw;
  font-family: ${({theme}) => theme.default.fontFamily.join(', ')};
  /* Temp */
  background-image: url('/assets/bg.png');
  background-position: top;
  background-size: 100%;
`;

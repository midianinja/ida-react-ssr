import styled from "styled-components";

export default styled.div`
  width: ${({theme, scale}) => scale * 32}px;
  height: ${({theme, scale}) => scale * 32}px;
  background-image: url('assets/icons/${({name}) => name}.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
`;

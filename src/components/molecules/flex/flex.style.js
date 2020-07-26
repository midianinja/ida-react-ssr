import styled from "styled-components";

export const FlexComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${({column}) => column ? "column" : "row"};
  padding: ${({theme}) => theme.default.spacing}px;
`;

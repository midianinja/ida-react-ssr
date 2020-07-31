import styled from "styled-components";

export const FlexComponent = styled.div`
  display: flex;
  flex: ${({flex}) => Number(flex)};
  flex-direction: ${({column}) => column ? "column" : "row"};
  padding: ${({theme}) => theme.default.spacing.value()};
`;

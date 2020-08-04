import styled from "styled-components";

export const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  & > * {
    margin-top: 10px;
  }
`;

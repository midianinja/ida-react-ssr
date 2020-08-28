import styled from "styled-components";

export const InputContainer = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 48px;
  color: ${(props) => props.theme.colors.secondary};
  border: 2px solid currentColor;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 1rem;

  ${(props) =>
    props.disabled &&
    `
    color: ${props.theme.colors.muted};
  `}

  ${(props) =>
    props.error &&
    `
    color: ${props.theme.colors.error};
  `}
`;

export const InputLabel = styled.span`
  background-color: transparent;
  position: absolute;
  pointer-events: none;
  color: currentColor;

  ${(props) =>
    props.active &&
    `
    background-color: #1D1D1D;
    padding: 0 7px;
    transform: translate(-0.5rem, -1.45rem) scale(0.75);
  `}
`;

export const InputComponent = styled.input`
  color: currentColor;
  caret-color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  width: 100%;
`;

export const InputComplement = styled.span`
  pointer-events: all;
  max-height: 100%;
  margin-left: 10px;
`;

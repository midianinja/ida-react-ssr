import styled from "styled-components";

export const InputContainer = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 48px;
  color: ${(props) => props.theme.colors.secondary};
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
  will-change: transform;
  left: 10px;
  right: 0;

  ${(props) =>
    props.active &&
    `
    transform: translate(-1.4em, -1.55em) scale(0.75);
  `}
`;

export const InputComponent = styled.input`
  color: currentColor;
  caret-color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
  width: 100%;
`;

export const InputFieldset = styled.fieldset`
  border: 2px solid currentColor;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 8px;
  overflow: hidden;
  pointer-events: none;
`;

export const InputLegend = styled.legend`
  width: auto;
  height: 11px;
  display: block;
  padding: 0;
  font-size: 0.75em;
  max-width: 0.01px;
  text-align: left;
  transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  visibility: hidden;

  ${(props) =>
    props.active &&
    `
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms;
  `}
`;

export const InputLegendSpan = styled.span`
  display: inline-block;
  padding-left: 5px;
  padding-right: 7px;
`;

export const InputComplement = styled.span`
  pointer-events: all;
  max-height: 100%;
  margin-left: 10px;
`;

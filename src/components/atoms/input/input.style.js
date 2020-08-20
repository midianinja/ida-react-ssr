import styled from "styled-components";

const InputContainer = styled.label`
  height: 48px;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 1rem;
`;

const InputLabel = styled.span`
  background-color: transparent;
  position: absolute;
  pointer-events: none;
  color: ${(props) => props.theme.colors.secondary};

  ${(props) =>
    props.active &&
    `
    background-color: #1D1D1D;
    padding: 0 7px;
    transform: translate(-0.5rem, -1.45rem) scale(0.75);
  `}
`;

const InputComponent = styled.input`
  color: ${(props) => props.theme.colors.secondary};
  caret-color: ${(props) => props.theme.colors.secondary};
  background-color: transparent;
`;

export { InputContainer, InputLabel, InputComponent };

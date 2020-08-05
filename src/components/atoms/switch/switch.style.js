import styled from "styled-components";

const Label = styled.label`
  border: 2px solid #6523cf;
  border-radius: 10px;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  height: fit-content;
`;

const OptionEmail = styled.button`
  background-color: ${({ active }) => (active ? "#6523CF" : "#1D1D1D")};
  border: 0px solid #6523cf;
  border-radius: 7px;
  padding: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  width: 100px;
  cursor: pointer;

  transition: all 0.2s ease;
`;

const OptionCel = styled.button`
  background-color: ${({ active }) => (active ? "#6523CF" : "#1D1D1D")};
  border: 0px solid #6523cf;
  border-radius: 7px;
  padding: 12px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  width: 100px;
  cursor: pointer;

  transition: all 0.2s ease;
`;

export { Label, OptionEmail, OptionCel };

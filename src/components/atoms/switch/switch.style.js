import styled from "styled-components";

const Label = styled.label`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  height: fit-content;
`;

const OptionEmail = styled.button`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  border: 0px solid ${({ theme }) => theme.colors.primary};
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
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  border: 0px solid ${({ theme }) => theme.colors.primary};
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

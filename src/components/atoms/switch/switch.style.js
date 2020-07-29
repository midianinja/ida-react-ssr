import styled from "styled-components";

const Label = styled.label`
  border: 2px solid #6523CF;
  border-radius: 10px;
  background-color: #000;
  display: flex;
	align-items: center;
	height: 100%;
`;

const Option = styled.button`
 	border: 0px solid #6523CF;
  border-radius: 10px;
  padding: 12px;
	font-size: 12px;
	font-weight: 500;
	color: #000;
	width: 100px;
	cursor: pointer;
`;

export { Label, Option };

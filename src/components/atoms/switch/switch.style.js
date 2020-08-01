import styled from "styled-components";

const Label = styled.label`
  border: 2px solid #6523CF;
  border-radius: 10px;
  background-color: #1D1D1D;
  display: flex;
  align-items: center;
  height: 100%;
`;

const OptionEmail = styled.button`
	background-color: ${({active}) => active ? '#6523CF' : '#1D1D1D'};
 	border: 0px solid #6523CF;
	border-radius: 7px;
	padding: 12px;
	font-size: 12px;
	font-weight: 500;
	color: #FFF;
	width: 100px;
	cursor: pointer;

	transition: all 0.2s ease;
`;

const OptionCel = styled.button`
	background-color: ${({active}) => active ? '#6523CF' : '#1D1D1D'};
 	border: 0px solid #6523CF;
	border-radius: 7px;
	padding: 12px;
	font-size: 12px;
	font-weight: 500;
	color: #FFF;
	width: 100px;
	cursor: pointer;

	transition: all 0.2s ease;
`;

export { Label, OptionEmail, OptionCel  };

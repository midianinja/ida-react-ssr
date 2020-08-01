import styled from 'styled-components';

const LabelComponent = styled.label`
    position: absolute;
    margin: 0 1rem;
    padding: 0 0.3rem;
    top: ${({labelPos}) => labelPos ? "-0.5" : "1"}rem;
    border: 0;
    font-size: ${({labelPos}) => labelPos ? "0.8" : "1"}rem;
    background-color: #1d1d1d;
    color: ${({labelPos}) => labelPos ? "#FFF" : "#AAA"};
    pointer-events: none;
    transition: all 0.2s ease;
`;

export default LabelComponent;
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import {
  InputContainer,
  InputLabel,
  InputComponent,
  InputComplement,
  InputFieldset,
  InputLegend,
  InputLegendSpan,
} from "./input.style";

const Input = (props) => {
  const { label, disabled, onChange, error, value, endComplement } = props;

  const [active, setActive] = useState(false);
  const [innerValue, setInnerValue] = useState(value || "");

  return (
    <InputContainer disabled={disabled} error={error}>
      <InputLabel active={active || innerValue}>{label}</InputLabel>
      <InputComponent
        onChange={(event) => {
          setInnerValue(event.target.value);

          if (onChange) {
            onChange(event);
          }
        }}
        disabled={disabled}
        value={innerValue}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
      <InputFieldset>
        <InputLegend active={active || innerValue}>
          <InputLegendSpan>{label}</InputLegendSpan>
        </InputLegend>
      </InputFieldset>
      {endComplement && <InputComplement>{endComplement}</InputComplement>}
    </InputContainer>
  );
};

Input.propTypes = {};

export default Input;

import { useState } from "react";
import PropTypes from "prop-types";

import { InputContainer, InputLabel, InputComponent, InputComplement } from "./input.style";

const Input = (props) => {
  const { label, disabled, onChange, error, value, endComplement } = props;

  const [active, setActive] = useState(false);
  const [innerValue, setInnerValue] = useState(value || "");

  return (
    <InputContainer disabled={disabled} error={error}>
      <InputLabel active={innerValue || active}>{label}</InputLabel>
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
      {endComplement && <InputComplement>{endComplement}</InputComplement>}
    </InputContainer>
  );
};

Input.propTypes = {};

export default Input;

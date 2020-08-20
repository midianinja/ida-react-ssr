import { useState } from "react";
import PropTypes from "prop-types";

import { InputContainer, InputLabel, InputComponent } from "./input.style";

const Input = (props) => {
  const { label, disabled, onChange } = props;
  const [active, setActive] = useState(false);

  return (
    <InputContainer>
      <InputLabel active={active}>{label}</InputLabel>
      <InputComponent
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
      />
    </InputContainer>
  );
};

Input.propTypes = {};

export default Input;

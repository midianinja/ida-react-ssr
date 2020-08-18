import { useState } from "react";
import PropTypes from "prop-types";
import { Label, Input } from "./input.style";

const InputUser = (props) => {

  return (
    <div>
      <Label>Name</Label>
      <Input></Input>
    </div>
  );
};

InputUser.propTypes = {
  Input: PropTypes.func.isRequired,
};

export default InputUser;
import { useState } from "react";
import { Label, Option } from "./switch.style";

const Switch = (props) => {
  return (
    <Label>
      <Option >E-mail</Option>
      <Option>Celular</Option>
    </Label>
  );
};

export default Switch;

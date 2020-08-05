import { useState } from "react";
import { Label, OptionEmail, OptionCel } from "./switch.style";
import PropTypes from "prop-types";

const Switch = ({ handleChange }) => {
  const [active, setActive] = useState("email");

  return (
    <Label>
      <OptionEmail
        onClick={() => {
          handleChange("email");
          setActive("email");
        }}
        active={active === "email"}
      >
        E-mail
      </OptionEmail>
      <OptionCel
        onClick={() => {
          handleChange("cel");
          setActive("cel");
        }}
        active={active === "cel"}
      >
        Celular
      </OptionCel>
    </Label>
  );
};

Switch.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Switch;

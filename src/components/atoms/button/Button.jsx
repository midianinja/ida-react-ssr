import PropTypes from "prop-types";
import { ButtonComponent } from "./button.style";

const Button = ({ type, onClick, disabled, variant, children }) => (
  <ButtonComponent
    onClick={onClick}
    type={type}
    disabled={disabled}
    variant={variant}
  >
    {children}
  </ButtonComponent>
);

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  variant: PropTypes.oneOf(["active", "secondary", "constrast"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'primary',
  variant: 'active'
}

export default Button;

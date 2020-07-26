import PropTypes from 'prop-types';
import { ButtonComponent } from './button.style';

const Button = ({
  type,
  onClick,
  children,
}) => (
  <ButtonComponent onClick={onClick} type={type}>
    {children}
  </ButtonComponent>
);

Button.propTypes = {
  type: PropTypes.oneOf([
    "none",
    "defaultBg",
    "primary",
    "secondary",
    "inactive",
    "error",
    "success"
  ]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

import PropTypes from 'prop-types';
import { ButtonComponent } from './button.style';
import { BodyTextComponent } from '../bodyText/bodyText.style';

const Button = ({
  type,
  onClick,
  disable = false,
  children,
}) => (
  <ButtonComponent onClick={(event)=>!disable && onClick(event)} type={type}>
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

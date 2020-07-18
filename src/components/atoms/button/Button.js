import react from 'react';
import PropTypes from 'prop-types';
import { ButtonComponent } from './button.style';

const Button = ({
  onClick,
  children,
}) => (
  <ButtonComponent onClick={onClick}>
    <marquee>{children}</marquee>
  </ButtonComponent>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
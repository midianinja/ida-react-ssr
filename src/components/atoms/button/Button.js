import react from 'react';
import PropTypes from 'prop-types';
import { Button } from './button.style';

const Button = ({
  onClick,
  children,
}) => (
  <Button onClick={onClick}>
    {children}
  </Button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
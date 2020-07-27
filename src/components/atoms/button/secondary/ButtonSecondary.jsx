import PropTypes from 'prop-types';
import { ButtonSecondaryComponent } from './buttonSecondary.style';

const ButtonSecondary = ({
  type,
  onClick,
  children,
}) => (
  <ButtonSecondaryComponent onClick={onClick} type={type}>
    {children}
  </ButtonSecondaryComponent>
);

ButtonSecondary.propTypes = {
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

export default ButtonSecondary;

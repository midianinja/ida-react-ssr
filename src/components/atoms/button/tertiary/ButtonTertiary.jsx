import PropTypes from 'prop-types';
import { ButtonTertiaryComponent } from './buttonTertiary.style';

const ButtonTertiary = ({
  type,
  onClick,
  disable = false,
  children,
}) => (
  <ButtonTertiaryComponent onClick={(event)=>!disable && onClick(event)} type={type}>
    {children}
  </ButtonTertiaryComponent>
);

ButtonTertiary.propTypes = {
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

export default ButtonTertiary;

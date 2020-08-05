import PropTypes from "prop-types";

import { ArrowLeftIcon } from "../icon";

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTertiaryButton,
  StyledNavigationButton,
  StyledIconButton,
} from "./button.style";

const handleLinkWrapping = (Component, props) => {
  const {
    variant = "primary",
    href,
    target,
    disabled,
    isLoading,
    ...rest
  } = props;

  const buttonsProps = {
    variant,
    disabled: disabled || isLoading,
    ...rest,
  };

  const button = React.isValidElement(Component) ? (
    React.cloneElement(Component, { ...buttonsProps })
  ) : (
    <Component {...buttonsProps} />
  );

  if (href)
    return (
      <a
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
      >
        {button}
      </a>
    );

  return button;
};

const PrimaryButton = (props) => handleLinkWrapping(StyledPrimaryButton, props);

const SecondaryButton = (props) =>
  handleLinkWrapping(StyledSecondaryButton, props);

const TertiaryButton = (props) =>
  handleLinkWrapping(StyledTertiaryButton, props);

const NavigationButton = ({ children, ...props }) =>
  handleLinkWrapping(
    <StyledNavigationButton {...props}>
      <ArrowLeftIcon
        style={{ marginRight: 10 }}
        color={props.disabled ? "muted" : props.variant}
        size={16}
      />
      {children}
    </StyledNavigationButton>,
    props
  );

const IconButton = ({ children, icon, ...props }) =>
  handleLinkWrapping(
    <StyledIconButton {...props}>
      {React.cloneElement(icon, {
        style: { marginBottom: 10 },
        color: props.disabled ? "muted" : props.variant,
      })}
      {children}
    </StyledIconButton>,
    props
  );

const propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

PrimaryButton.propTypes = propTypes;
SecondaryButton.propTypes = propTypes;
TertiaryButton.propTypes = propTypes;
NavigationButton.propTypes = propTypes;
IconButton.propTypes = {
  ...propTypes,
  icon: PropTypes.element,
};

export { PrimaryButton, SecondaryButton, TertiaryButton, NavigationButton, IconButton };

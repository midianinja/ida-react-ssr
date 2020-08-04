import PropTypes from "prop-types";

import { ArrowLeftIcon } from "../icon";

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledTertiaryButton,
  StyledNavigationButton,
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

const propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

PrimaryButton.propTypes = SecondaryButton.propTypes = TertiaryButton.propTypes = NavigationButton.propTypes = propTypes;

export { PrimaryButton, SecondaryButton, TertiaryButton, NavigationButton };

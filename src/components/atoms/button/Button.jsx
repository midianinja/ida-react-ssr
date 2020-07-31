import { useTheme } from "styled-components"
import PropTypes from "prop-types"

import { ArrowLeftIcon } from "../icon"

import { StyledPrimaryButton, StyledSecondaryButton, StyledTertiaryButton, StyledNavigationButton } from "./button.style"

const handleLinkWrapping = (Component, props) => {
  const { href, target, children, disabled, isLoading, ...rest } = props

  const button = (
    <Component disabled={disabled || isLoading} {...rest}>
      {children}
    </Component>
  )

  if (href)
    return (
      <a
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
      >
        {button}
      </a>
    )

  return button
}

const PrimaryButton = props => handleLinkWrapping(StyledPrimaryButton, props)
const SecondaryButton = props => handleLinkWrapping(StyledSecondaryButton, props)
const TertiaryButton = props => handleLinkWrapping(StyledTertiaryButton, props)
const NavigationButton = props => handleLinkWrapping((
  <StyledNavigationButton {...props}>
    <ArrowLeftIcon style={{ marginRight: 10 }} color={props.variant} size={14} />
    {props.children}
  </StyledNavigationButton>
), props)

const propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}


const defaultProps = {
  variant: 'primary'
}

PrimaryButton.propTypes = SecondaryButton.propTypes = TertiaryButton.propTypes = NavigationButton.propTypes = propTypes
PrimaryButton.defaultProps = SecondaryButton.defaultProps = TertiaryButton.defaultProps = NavigationButton.defaultProps = defaultProps

export { PrimaryButton, SecondaryButton, TertiaryButton, NavigationButton }
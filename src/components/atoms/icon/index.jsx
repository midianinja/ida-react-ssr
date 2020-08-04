import PropTypes from 'prop-types'
import { useTheme } from "styled-components"

import ArrowLeft from './arrow-left'
import Close from './close'

const baseIcon = (Icon, { color = 'primary', size = 24, ...rest }) => {
  const { colors } = useTheme()
  const themeColor = colors[color] || color

  return (
    <Icon {...rest} color={themeColor} size={size} />
  )
}

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

const ArrowLeftIcon = props => baseIcon(ArrowLeft, props)
const CloseIcon = props => baseIcon(Close, props)

ArrowLeftIcon.propTypes =
CloseIcon.propTypes = propTypes

export { ArrowLeftIcon, CloseIcon }

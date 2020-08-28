import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import ArrowLeft from "./arrow-left";
import Close from "./close";
import Phone from "./phone";
import Email from "./email";
import Eye from "./eye";
import Error from "./error";
import Success from "./success";

const baseIcon = (Icon, { color = "primary", size = 24, ...rest }) => {
  const { colors } = useTheme();
  const themeColor = colors[color] || color;

  return <Icon {...rest} color={themeColor} size={size} />;
};

const propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export const ArrowLeftIcon = (props) => baseIcon(ArrowLeft, props);
export const CloseIcon = (props) => baseIcon(Close, props);
export const PhoneIcon = (props) => baseIcon(Phone, props);
export const EmailIcon = (props) => baseIcon(Email, props);
export const EyeIcon = (props) => baseIcon(Eye, props);
export const ErrorIcon = (props) => baseIcon(Error, props);
export const SuccessIcon = (props) => baseIcon(Success, props);

ArrowLeftIcon.propTypes = CloseIcon.propTypes = propTypes;
PhoneIcon.propTypes = propTypes;
EmailIcon.propTypes = propTypes;
EyeIcon.propTypes = propTypes;
ErrorIcon.propTypes = propTypes;
SuccessIcon.propTypes = propTypes;

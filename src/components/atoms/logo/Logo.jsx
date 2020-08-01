import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({
  width, height, scale, logo, altText,
}) => (
  <img alt={altText} width={width * scale} height={height * scale} src={`/assets/logo/${logo}.svg`} />
);

Logo.propTypes = {
  altText: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  scale: PropTypes.number,
  logo: PropTypes.string.isRequired,
};

Logo.defaultProps = {
  scale: 1,
};

export default Logo;

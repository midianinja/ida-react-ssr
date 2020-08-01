import React from 'react';
import LabelComponent from './label.style';
import PropTypes from 'prop-types';

const Label = ({children, labelPos}) => {
    return <LabelComponent labelPos={labelPos}>{children}</LabelComponent>
}

Label.propTypes = {
    labelPos: PropTypes.bool.isRequired, 
    children: PropTypes.node.isRequired
};

Label.defaultProps = {
    labelPos: false
}

export default Label;
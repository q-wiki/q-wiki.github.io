import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon'

import './button.scss';

const Button = ({children, ...props }) => (
   <button className="btn draw-border" onClick={props.onClick}>
     {children}
     {/* You can configure an optional item; everything in props.icon will just be passed further down */}
     {props.icon != null && <Icon {...props.icon} />}
   </button>
);

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {

};

export default Button;

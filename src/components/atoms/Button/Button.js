import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/Icon'

import './button.scss';

const Button = ({children, ...props }) => (
   <button className={`btn draw-border ${props.icon != null ? 'has-icon' : ''} ${props.small ? 'is-small' : ''}`} onClick={props.onClick}>
     {children}
     {/* You can configure an optional item; everything in props.icon will just be passed further down */}
     {props.icon != null &&
        <Icon width={props.icon.width || props.small ? 18 : 24}
            height={props.icon.height || props.small ? 18 : 24}
            {...props.icon} />}
   </button>
);

Button.propTypes = {
    children: PropTypes.string,
    small: PropTypes.bool,
    onClick: PropTypes.func,
    icon: PropTypes.object
};

Button.defaultProps = {

};

export default Button;

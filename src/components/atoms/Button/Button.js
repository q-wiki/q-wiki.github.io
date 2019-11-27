import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({children, ...props }) => (
   <button className="btn draw-border" onClick={props.onClick}>
       {children}
   </button>
);

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {

};

export default Button;

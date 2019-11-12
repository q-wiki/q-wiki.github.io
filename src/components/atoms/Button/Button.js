import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({children, ...props }) => (
   <button className="btn draw-border">
       {children}
   </button>
);

Button.propTypes = {
    children: PropTypes.string
};

Button.defaultProps = {

};

export default Button;

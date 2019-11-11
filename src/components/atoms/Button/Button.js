import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ ...props }) => (
    <div className="dropdown input-effect">
        <button>
            click me
        </button>
    </div>
);

Button.propTypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array,
};

Button.defaultProps = {

};

export default Button;

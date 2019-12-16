import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

const Dropdown = React.forwardRef((props, ref) => (
    <div className="dropdown input-effect">
        <select name={props.name} ref={ref} required className="effect-20" defaultValue=''>
            <option key="1000" value=''/>
            {props.options.map((item, i) =>
                <option key={item.key || i} value={item.value || item.text}>{item.text}</option>
            )}
        </select>
        <label>{props.placeholder}</label>
        <span className="focus-border">
           <i/>
        </span>
    </div>
))

Dropdown.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.array,
};

Dropdown.defaultProps = {
    onChange: Function.prototype
};

export default Dropdown;

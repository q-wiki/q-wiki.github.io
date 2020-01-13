import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

const Dropdown = ({ ...props }) => (
    <div className="dropdown input-effect">
        <select required className="effect-20" defaultValue='' onChange={props.onChange}>
            <option key="1000" value=''/>
            {
                props.options.map((item, i) =>
                <option key={i} value={item.id || item.title}>{item.title}</option>
            )}
        </select>
        <label>{props.placeholder}</label>
        <span className="focus-border">
           <i/>
        </span>
    </div>
);

Dropdown.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
   // options: PropTypes.array,
};

Dropdown.defaultProps = {
    onChange: Function.prototype
};

export default Dropdown;

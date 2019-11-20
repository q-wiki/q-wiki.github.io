import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

const Dropdown = ({ ...props }) => (
    <div className="dropdown input-effect">
        <select required className="effect-20" defaultValue="default">
            <option key="1000" value="default"/>
            {props.options.map((item, i) =>
                <option key={i} value={i}>{item}</option>
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
    options: PropTypes.array,
};

Dropdown.defaultProps = {

};

export default Dropdown;

import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

const ValidatedDropdown = React.forwardRef((props, ref) => {
    const [hasContent, setHasContent] = useState(props.defaultValue != null && props.defaultValue !== '')
    const onChange = e => {
        setHasContent(e.target.value !== '')
        if (props.onChange) props.onChange(e)
    }

    return (
        <div className="dropdown input-effect">
            <select
                name={props.name}
                ref={ref}
                defaultValue={props.defaultValue}
                required={props.required}
                onChange={onChange}
                className={`effect-20 ${hasContent ? 'has-content' : ''}`}>
                <option key="1000" value=''/>
                {
                    props.options.map((item, i) =>
                        <option key={item.key || i} value={item.id || item.value || item.text || item}>{item.text || item}</option>
                    )}
            </select>
            <label>{props.placeholder}</label>
            <span className="focus-border">
            <i/>
            </span>
        </div>
    )
})

ValidatedDropdown.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    defaultValue: PropTypes.any,
    options: PropTypes.array
};

ValidatedDropdown.defaultProps = {
    onChange: Function.prototype
};

export default ValidatedDropdown;
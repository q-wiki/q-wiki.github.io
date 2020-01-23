import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './textArea.scss';

const TextArea = React.forwardRef((props, ref) => {
    const [hasContent, setHasContent] = useState(props.defaultValue != null && props.defaultValue !== '')
    const onChange = e => {
        setHasContent(e.target.value !== '')
        if (props.onChange) props.onChange(e)
    }

    return (
        <div className="textarea input-effect">
            <textarea
                name={props.name}
                ref={ref}
                defaultValue={props.defaultValue}
                onChange={onChange}
                className={`effect-20 ${hasContent ? 'has-content' : ''}`}
                placeholder="">
            {props.children}
            </textarea>
            <label>{props.placeholder}</label>
            <span className="focus-border">
            <i></i>
            </span>
            <div className="pull-tab"></div>
        </div>
    )
})

TextArea.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
};

TextArea.defaultProps = {
};

export default TextArea;

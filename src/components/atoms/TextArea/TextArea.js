import React from 'react';
import PropTypes from 'prop-types';

import './textArea.scss';

const TextArea = React.forwardRef((props, ref) => (
    <div className="textarea input-effect">
        <textarea name={props.name} ref={ref} className="effect-20" placeholder="">
        {props.children}
        </textarea>
        <label>{props.placeholder}</label>
        <span className="focus-border">
           <i></i>
        </span>
        <div className="pull-tab"></div>
    </div>
))

TextArea.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func
};

TextArea.defaultProps = {
};

export default TextArea;

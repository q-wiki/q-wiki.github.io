import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../TextField/TextField';

import './textArea.scss';

const TextArea = ({ ...props }) => (
    <div className="textarea input-effect">
        <textarea className="effect-20" type="text" placeholder="">
        </textarea>
        <label>{props.placeholder}</label>
        <span className="focus-border">
           <i></i>
        </span>
        <div class="pull-tab"></div>
    </div>
);

TextArea.propTypes = {
    placeholder: PropTypes.string,
};

TextArea.defaultProps = {

};

export default TextArea;

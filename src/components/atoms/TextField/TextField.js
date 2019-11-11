import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './textField.scss';

const TextField = ({ ...props }) => (
    <div className="textfield input-effect">
        <input className="effect-20" type="text" placeholder=""/>
            <label>{props.placeholder}</label>
            <span className="focus-border">
            	<i></i>
            </span>
    </div>
);

TextField.propTypes = {
    placeholder: PropTypes.string,
};

TextField.defaultProps = {

};

export default TextField;

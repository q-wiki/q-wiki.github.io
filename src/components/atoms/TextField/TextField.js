import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './textField.scss';

const TextField = ({children, ...props }) => (
      <div className="textfieldWrapper textfield input-effect">
        <input className="effect-20" type="text" placeholder="" onChange={props.onchange}/>
        <label>{props.placeholder}</label>
        <span className="focus-border">
        <i/>
        </span>
          {
            children?(
              <span className="iconWrapper">
                {children}
              </span>
            ):null
          }
      </div>
);

TextField.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.node,
    onchange: PropTypes.function,
    value: PropTypes.string,
};

TextField.defaultProps = {

};

export default TextField;

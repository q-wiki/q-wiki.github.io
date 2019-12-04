import React from 'react';
import PropTypes from 'prop-types';

import './textField.scss';

const TextField = ({children, ...props }) => (
      <div className="textfieldWrapper textfield input-effect">
        <input className="effect-20" type="text" placeholder="" onChange={props.onChange} onKeyPress={props.onKeyPress} />
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
    onChange: PropTypes.function,
    onKeyPress: PropTypes.function,
    value: PropTypes.string,
};

TextField.defaultProps = {
  onChange: Function.prototype,
  onKeyPress: Function.prototype
};

export default TextField;

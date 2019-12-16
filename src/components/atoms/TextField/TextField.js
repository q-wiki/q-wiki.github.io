import React from 'react';
import PropTypes from 'prop-types';

import './textField.scss';

const TextField = React.forwardRef(({children, ...props }, ref) => (
  <div className="textfieldWrapper textfield input-effect">
    <input name={props.name} className="effect-20" type="text" ref={ref} onKeyPress={props.onKeyPress} />
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
))

TextField.propTypes = {
    placeholder: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
    onKeyPress: PropTypes.func,
    value: PropTypes.string,
};

TextField.defaultProps = {
};

export default TextField;

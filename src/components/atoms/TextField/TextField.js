import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './textField.scss';

const TextField = React.forwardRef(({children, ...props }, ref) => {
  const [hasContent, setHasContent] = useState(props.defaultValue != null && props.defaultValue !== '')
  const onChange = e => {
    setHasContent(e.target.value !== '')
    if (props.onChange) props.onChange(e)
  }

  return (
    <div className="textfieldWrapper textfield input-effect">
      <input
        name={props.name}
        defaultValue={props.defaultValue}
        onChange={onChange}
        className={`effect-20 ${hasContent ? 'has-content' : ''}`}
        type="text"
        ref={ref}
        onKeyPress={props.onKeyPress} />
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
  )
})

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

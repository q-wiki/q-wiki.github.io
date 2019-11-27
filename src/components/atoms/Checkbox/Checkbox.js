import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './checkbox.scss';

const Checkbox = ({ children, ...props }) => (
        <label className={"checkbox"}>
            {children}
            <input type="checkbox"/>
        </label>
);

Checkbox.propTypes = {
    children: PropTypes.string,
};

Checkbox.defaultProps = {

};

export default Checkbox;

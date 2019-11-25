import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import variables from '../../../../src/assets/variables.scss';

const fontColors = {
  white: variables.white,
  black: variables.black,
};

const fontWeight = {
  bold: 'bold',
  normal: 'normal'
};

const Text = styled.p`
display: inline-block;
text-align: ${props => props.textAlign};
font-size: 14px;
line-height: ${props => props.height || 18}px;
color: ${props => fontColors[props.pallete]};
font-weight: ${props => fontWeight[props.fontWeight]};
`;

const Paragraph = ({ children, ...props }) => (
<Text {...props}>{children}</Text>
);

Paragraph.propTypes = {
textAlign:PropTypes.oneOf([
  'left',
  'center',
  'right'
]),
children: PropTypes.node,
height: PropTypes.number,
size: PropTypes.string,
pallete: PropTypes.string,
left: PropTypes.bool,
fontWeight: PropTypes.string,
};

Paragraph.defaultProps = {
textAlign:'center',
pallete: 'black',
fontWeight: 'normal',
};

export default Paragraph;

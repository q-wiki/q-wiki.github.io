import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import  '../../../../src/assets/variables.scss';

const fontColors = {
  white: '$white',
  black: '$black',
};

const fontWeight = {
  bold: 'bold',
  normal: 'normal'
};

const Text = styled.p`
display: inline-block;
text-align: ${props => (props.left ? 'left' : 'center')};
font-size: 14px;
line-height: ${props => props.height || 18}px;
color: ${props => fontColors[props.pallete]};
font-weight: ${props => fontWeight[props.fontWeight]};
`;

const Paragraph = ({ children, ...props }) => (
<Text {...props}>{children}</Text>
);

Paragraph.propTypes = {
children: PropTypes.node,
height: PropTypes.number,
size: PropTypes.string,
pallete: PropTypes.string,
left: PropTypes.bool,
fontWeight: PropTypes.string,
};

Paragraph.defaultProps = {
pallete: 'black',
fontWeight: 'normal',
};

export default Paragraph;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const fontColors = {
  black: '#000000',
};

const Text = styled.p`
display: inline-block;
text-align: ${props => (props.left ? 'left' : 'center')};
font-size: 14px;
line-height: ${props => props.height || 18}px;
color: ${props => fontColors[props.pallete]};
`;

const Paragraph = ({ children, ...props }) => (
<Text {...props}>{children}</Text>
);

Paragraph.propTypes = {
children: PropTypes.node,
height: PropTypes.number,
size: PropTypes.string,
pallete: PropTypes.string,
left: PropTypes.string,
};

Paragraph.defaultProps = {
pallete: 'black',
};

export default Paragraph;

import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const getFontSize = type => {
  switch (type) {
    case 'H1':
      return `font-size: 24px;`;
    case 'H2':
      return `font-size: 18px;`;
    default:
      return `font-size: 18px;`;
  }
};
const fontColors = {
  black: '#000000',
  brightGreen: '#E9EDDE',
  white: '#FFFFFF',
  turqoise: '#509E9E',
  darkTurqoise: '#024040',
  darkYellow: '#B79123',
  darkRed: '#7D2F0E',
};

const Text = styled.h2`
  font-weight: 700;
  ${props => getFontSize(props.type)}
  color: ${props => fontColors[props.pallete]};
`;

const Heading = ({ type, pallete, children }) => {
  return <Text {...{ type, pallete }}>{children}</Text>;
};

Heading.propTypes = {
  type: PropTypes.oneOf(['H1', 'H2']),
  pallete: PropTypes.oneOf(['black', 'white', 'brightGreen', 'turqoise', 'darkTurqoise', 'darkYellow', 'darkRed' ]),
  children: PropTypes.node,
};

Heading.defaultProps = {
  type: 'H2',
  pallete: 'black',
};

export default Heading;

import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

import './heading.scss';
import  variables from '../../../../src/assets/variables.scss';

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
  white: variables.white,
  black: variables.black,
  qwikiLightBlue: variables.qwikiLightBlue,
  qwikiDarkBlue: variables.qwikiDarkBlue,
  qwikiOrange: variables.qwikiOrange,
  qwikiDarkRed: variables.qwikiDarkRed,
};

const Text = styled.h2 `
  font-weight: 700;
  ${props => getFontSize(props.type)}
  color: ${props => fontColors[props.pallete]};
  white-space: ${props => (
  props.twoLined
  ? 'normal'
  : 'pre-wrap')};
`;

const Heading = ({
  type,
  pallete,
  children,
  underlined,
  twoLined,
  ...props
}) => {
  return (<div>
    <Text {...{ type, pallete }}>{children}</Text>

    {
      underlined ?
        (<div className="double-underline-container">
          <div className="double-underline-thick"></div>
          <div className="double-underline-thin"></div>
        </div>)
        : ''
    }

  </div>)
};

Heading.propTypes = {
  type: PropTypes.oneOf(['H1', 'H2']),
  pallete: PropTypes.oneOf([
    'black',
    'white',
    'qwikiLightBlue',
    'qwikiDarkBlue',
    'qwikiOrange',
    'qwikiDarkRed',

  ]),
  children: PropTypes.node,
  underlined: PropTypes.bool,
  twoLined: PropTypes.bool
};

Heading.defaultProps = {
  type: 'H2',
  pallete: 'black',
  twoLined: 'false',
  underlined: 'false'
};

export default Heading;

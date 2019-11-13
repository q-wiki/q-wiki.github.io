import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './icon.scss';
import  variables from '../../../../src/assets/variables.scss';


const svgColors = {
  white: variables.white,
  black: variables.black,
  qwikiLightBlue: variables.qwikiLightBlue,
  qwikiDarkBlue: variables.qwikiDarkBlue,
  qwikiOrange: variables.qwikiOrange,
  qwikiDarkRed: variables.qwikiDarkRed,
};

const Wrapper = styled.span`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  display: inline-block;
  box-sizing: border-box;
  color: ${props => svgColors[props.pallete]};
  & > svg {
    fill: ${props => svgColors[props.pallete]};
    stroke: ${props => svgColors[props.pallete]};
    width: 100%;
    height: 100%;
  }
`


const Icon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`);
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  pallete: PropTypes.oneOf([
    'black',
    'white',
    'qwikiLightBlue',
    'qwikiDarkBlue',
    'qwikiOrange',
    'qwikiDarkRed',
  ]),
}

Icon.defaultProps = {
  pallete: 'black',
};

export default Icon

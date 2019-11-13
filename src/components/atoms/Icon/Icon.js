import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Image = styled.img`
  width: ${props => props.width || 2}rem;
  height: ${props => props.height || 2}rem;
`;


const Icon = ({ icon, ...props }) => {
  const svg = require(`./icons/${icon}.svg`);
  return <Image {...props} alt="icon" src={svg} onClick={props.onclick}/>;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  onclick: PropTypes.function,
}

export default Icon

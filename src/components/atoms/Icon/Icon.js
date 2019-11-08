import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'



const Image = styled.img``;


const Icon = ({ icon, ...props }) => {
  const svg = require(`./icons/${icon}.svg`);
  return <Image {...props} alt="icon" src={svg} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default Icon

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
width: ${props => props.width}px;
height: ${props => props.height}px;

`;

const Image = ({ backgroundSrc, ...props }) => (
  <Wrapper>
<img src={backgroundSrc} {...props}></img>
</Wrapper>
);

Image.propTypes = {
  backgroundSrc: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Image;

import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Background from '../../../../src/assets/images/q-wiki-logo.jpg';

const Wrapper = styled.div`
width: ${props => props.width}px;
height: ${props => props.height}px;

`;

const MainLogo = ({ ...props }) => (
  <Wrapper>
<img src={Background} {...props}></img>
</Wrapper>
);

MainLogo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

MainLogo.defaultProps = {
  width: 300,
};


export default MainLogo;

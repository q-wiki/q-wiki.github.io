import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Background from '../../../../src/assets/images/q-wiki-logo.jpg';
import Image from '../../atoms/Image/Image'

const MainLogo = ({ ...props }) => (
  <Image backgroundSrc={Background} width={300} />
);


export default MainLogo;

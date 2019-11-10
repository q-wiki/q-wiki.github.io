import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

const Wrapper = styled.div`
  width: 250px;
  text-align: center;
  padding: 20px 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  border: 1px solid #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.48);
  position: relative;
  overflow: hidden;
`;


const Card = ({ headline, content, icon, ...props }) => (
  <Wrapper {...props}>
    <Icon icon={"documents"}/>
    <Heading type="H2" pallete="black">{headline}</Heading>
    <Paragraph>{content}</Paragraph>

  </Wrapper>
);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;

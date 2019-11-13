import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

import './card.scss';

const Card = ({ headline, content, icon,  ...props }) => (
  <div className="card-container" {...props}>
    <Icon  icon={"documents"} height={92}/>
    <Heading  type="H2" underlined={true} twoLined>{headline}</Heading>
    <Paragraph fontWeight="bold">{content}</Paragraph>
  </div>
);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;

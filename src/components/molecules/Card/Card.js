import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'

import {
  Link
} from 'react-router-dom'

import './card.scss';

const Card = ({ headline, content, icon, isLinkExtern, link, routingLink,  ...props }) => (

  isLinkExtern ?
  <a href={link} target="_blank">
  <div className="card-container" {...props}>
    <Icon  icon={"documents"}  height={92}/>
    <Heading  type="H2" underlined={true} twoLined>{headline}</Heading>
    <Paragraph fontWeight="bold">{content}</Paragraph>
  </div>
  </a>
 :
 <Link to={routingLink}>
 <div className="card-container" {...props}>
   <Icon  icon={"documents"}  height={92}/>
   <Heading  type="H2" underlined={true} twoLined>{headline}</Heading>
   <Paragraph fontWeight="bold">{content}</Paragraph>
 </div>
</Link>




);

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
  isLinkExtern: PropTypes.bool,
  routingLink: PropTypes.string
};

export default Card;

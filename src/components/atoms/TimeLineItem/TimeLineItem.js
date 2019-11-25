import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

import './timeLineItem.scss';

const TimeLineItem = ({ headline, content, textAlign,  ...props }) => (

props.alignmentRight ?
  <div className="timeLineItem_container">
    <div className="timeLineItem_header h_right">
      <Heading pallete="qwikiDarkBlue" type="H2">
        {headline}
      </Heading>
    </div>
    <div className="timeLineItem_paragraph p_right">
      <Paragraph textAlign="right">{content}</Paragraph>
    </div>
  </div>
  :
  <div className="timeLineItem_container">
    <div className="timeLineItem_header h_left">
      <Heading pallete="qwikiDarkBlue" type="H2">
        {headline}
      </Heading>
    </div>
    <div className="timeLineItem_paragraph p_left">
      <Paragraph textAlign="left">{content}</Paragraph>
    </div>
  </div>
);

TimeLineItem.propTypes = {
};

export default TimeLineItem;

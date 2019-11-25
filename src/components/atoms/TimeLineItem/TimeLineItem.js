import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const TimeLineItem = ({  ...props }) => (
  <div {...props}>
    <Heading  palette="qwikiDarkBlue" type="H2">Headline</Heading>
    <Paragraph fontWeight="bold">Testing</Paragraph>
  </div>
);

TimeLineItem.propTypes = {
};

export default TimeLineItem;

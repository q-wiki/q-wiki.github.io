import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'

const TimeLineItem = ({  ...props }) => (
  <div {...props}>
    <div>
    <Heading  pallete="qwikiDarkBlue" type="H2">The Task</Heading>
    </div>
    <div>
    <Paragraph textAlign="left">The original group consisted of 6 master Students. As part of our masters program in International Media and Programming at the HTW Berlin, we were tasked to create a game in collaboration with Wikidata. During the summer semester of 2019 we worked several months to realize the project.</Paragraph>
    </div>
  </div>
);

TimeLineItem.propTypes = {
};

export default TimeLineItem;

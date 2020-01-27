import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Icon from "../../atoms/Icon/Icon";
import Heading from "../../atoms/Heading/Heading";


import "./numberDisplay.scss";

const NumberDisplay = ({  icon, headline1, headline2, ...props }) => (
<div className="numberDisplay-container">
  <Icon  icon={icon}  width={60}/>
  <div className="numberDisplay-content">
  <Heading  type="H1" pallete="white">{headline1}</Heading>
  <Heading  type="H2" pallete="qwikiOrange">{headline2}</Heading>
  </div>
</div>
);

NumberDisplay.propTypes = {
  headline2: PropTypes.string,
  icon: PropTypes.string,
};

export default NumberDisplay;

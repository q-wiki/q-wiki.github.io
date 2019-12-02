import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Link } from 'react-router-dom'

import "./menuItem.scss";

const MenuItem = ({  link, linkTitle, ...props }) => (

 <Link className="menuItem" {...props} to={link}>{linkTitle}</Link>
);

MenuItem.propTypes = {
  linkTitle: PropTypes.string,
  link: PropTypes.string
};

export default MenuItem;

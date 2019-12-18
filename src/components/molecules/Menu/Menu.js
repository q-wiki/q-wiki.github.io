import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuItem from "../../atoms/MenuItem/MenuItem";
import { Row, Col } from 'react-flexbox-grid';

import "./menu.scss";

const Menu = () => (
<div className="menu-container">
   <Row center="xs">
<MenuItem linkTitle="Home" link="/" />
<MenuItem linkTitle="About" link="/about" />
<MenuItem linkTitle="Report Problems" link="/report" />
<MenuItem linkTitle="Contribute" link="/contribute" />
</Row>
</div>

);

Menu.propTypes = {

};

export default Menu;

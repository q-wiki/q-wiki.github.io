import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import MenuItem from "../../atoms/MenuItem/MenuItem";

import "./menu.scss";

const Menu = () => (
<div className="menu-container">
<MenuItem linkTitle="Home" link="/" />
<MenuItem linkTitle="About" link="/about" />
<MenuItem linkTitle="Report Problems" link="/report" />
<MenuItem linkTitle="Contribute" link="/contribute" />
</div>

);

Menu.propTypes = {

};

export default Menu;

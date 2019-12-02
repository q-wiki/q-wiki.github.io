import React, { Component } from "react";

import MainLogo from "../../atoms/MainLogo/MainLogo";
import Icon from "../../atoms/Icon/Icon";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Menu from '../../molecules/Menu/Menu';
import Container75 from '../../atoms/Container75/Container75'

import "./header.scss";
import { Row, Col } from 'react-flexbox-grid';

const Header = () => (
  <div className="header-container">
    <div className="header-first">
      <Container75>
      <Row between="xs">
      <div className="content-left">
        <Icon icon="email" width={20} height={20}/>
        <Paragraph>Q-Wiki@wikidata.de</Paragraph>
      </div>
      <div className="content-right">
        <Paragraph>>Login</Paragraph>
      </div>
      </Row>
      </Container75>
    </div>
      <Container75>
    <Row center="xs">
    <MainLogo/>
    <Menu/>
    </Row>
      </Container75>
  </div>

);

export default Header;

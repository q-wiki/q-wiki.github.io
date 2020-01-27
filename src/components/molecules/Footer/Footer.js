import React, { Component } from "react";

import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Heading/Heading";
import Container75 from '../../atoms/Container75/Container75'

import "./footer.scss";
import { Row, Col } from 'react-flexbox-grid';

const Footer = () => (
  <div className="footer-container">
          <Container75>
            <Row between="xs">
    <Heading type="H2" pallete="white">
      Copyrights © 2020 Wikidata
    </Heading>
    <div>
      <Paragraph pallete="white"><a href="/" target="_blank">Privacy Policy</a></Paragraph>
      <Paragraph pallete="white"><a href="/" target="_blank">Contact</a></Paragraph>
      <Paragraph pallete="white"><a href="/" target="_blank">Terms of Use</a></Paragraph>
    </div>
    </Row>
  </Container75>
  </div>

);

export default Footer;

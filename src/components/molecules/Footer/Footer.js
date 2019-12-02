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
      Copyrights @ 2020 Wikidata
    </Heading>
    <div>
      <a href="/" target="_blank"><Paragraph pallete="white">Privacy Policy</Paragraph></a>
      <a href="/" target="_blank"><Paragraph pallete="white">Site Map</Paragraph></a>
      <a href="/" target="_blank"><Paragraph pallete="white">Contact</Paragraph></a>
      <a href="/" target="_blank"><Paragraph pallete="white">Terms of Use</Paragraph></a>
    </div>
    </Row>
  </Container75>
  </div>

);

export default Footer;

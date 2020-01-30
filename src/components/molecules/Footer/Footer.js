import React from "react";

import { Link } from 'react-router-dom'

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
      Copyright © 2020 Wikidata
    </Heading>
    <div>
      <Paragraph pallete="white"><Link to="/privacy-policy">Privacy Policy</Link></Paragraph>
      <Paragraph pallete="white"><Link to="/contact">Contact</Link></Paragraph>
    </div>
    </Row>
  </Container75>
  </div>

);

export default Footer;

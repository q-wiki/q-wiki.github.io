import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";

import "./cardMember.scss";

import { isMobile } from "react-device-detect";



const Wrapper = styled.div`



`;
const CardMember = ({ headline, link, content, backgroundImage, ...props }) => (
  <a className="link" href={link} target="_blank">
    <Wrapper
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0 ,0, 0), rgba(0, 0, 0, 0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
      className={`cardMember_container ${isMobile ? 'mobile' : 'browser'}`}
      {...{ backgroundImage }}
    >
      <div className="cardMember_container_content">
        <Heading pallete="white" type="H1" underlined={true}>
          {headline}
        </Heading>
        <Paragraph textAlign="left" pallete="white" fontWeight="bold">
          {content}
        </Paragraph>
      </div>
    </Wrapper>
  </a>
);

CardMember.propTypes = {
  backgroundImage: PropTypes.string,
  headline: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string
};

export default CardMember;

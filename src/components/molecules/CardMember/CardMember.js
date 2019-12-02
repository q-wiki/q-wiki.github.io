import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Heading from "../../atoms/Heading/Heading";
import Paragraph from "../../atoms/Paragraph/Paragraph";

import "./cardMember.scss";

const Wrapper = styled.div`
  background-image: url('${props => props.backgroundImage}');

  &:hover {
    background: linear-gradient(to bottom, rgba(0, 0 ,0, 0), rgba(0, 0, 0, 0.75)), url('${props =>
      props.backgroundImage}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`;
const CardMember = ({ headline, link, content, backgroundImage, ...props }) => (
  <a className="link" href={link} target="_blank">
    <Wrapper
      className="cardMember_container"
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

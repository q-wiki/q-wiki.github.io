import React from 'react'
import './aboutPage.scss';

import Container75 from '../../atoms/Container75/Container75'

import Heading from '../../atoms/Heading/Heading'
import CardMember from '../../molecules/CardMember/CardMember'
import TimeLineItem from '../../atoms/TimeLineItem/TimeLineItem'

import { aboutUsData } from '../../../../src/constants/constants'

import { Row, Col } from 'react-flexbox-grid';

export default function AboutPage() {

  console.log(aboutUsData[0].members[0].heading);

  return <>
    <div className="about-us-container">
      <div className="history-container">
        <Container75>
      <Heading  pallete="white" type="H1">The original Q-Wiki Project</Heading>
      </Container75>




  <div>
  <TimeLineItem
    headline={'The Task'}
    content={'The original group consisted of 6 master Students. As part of our masters program in International Media and Programming at the HTW Berlin, we were tasked to create a game in collaboration with Wikidata. During the summer semester of 2019 we worked several months to realize the project.'}
    />
  <TimeLineItem
    alignmentRight
    headline={'The End of the Beginning'}
    content={'The result at the end of the semester was recieved positively, promising a good foundation onto which new teams could build upon. Not just amongst Wikidata but also from professors at the HTW, which lead to the continuation of the project during the next semester. While the original team mostly returned to the project, we also welcomed 2 new members to help us perfect the game'}
    />
  </div>
  </div>
  <div className="members-container">
      <Heading type="H1">The Q-Wiki Team</Heading>
    <Row center="xs">
    {
      aboutUsData[0].members.map((aboutUsData, index) =>
      <div key={index} className="members">
      <CardMember link={aboutUsData.link} backgroundImage={aboutUsData.image} headline={aboutUsData.heading} content={aboutUsData.text}/>
      </div>
  )}
    </Row>
  </div>
  </div>
  </>
}

import React from 'react'
import './aboutPage.scss';

import Container75 from '../../atoms/Container75/Container75'

import Heading from '../../atoms/Heading/Heading'
import Image from  '../../atoms/Image/Image'
import CardMember from '../../molecules/CardMember/CardMember'
import TimeLineItem from '../../atoms/TimeLineItem/TimeLineItem'

import { aboutUsData, qWikiHistory } from '../../../../src/constants/constants'


import { Row, Col } from 'react-flexbox-grid';

export default function AboutPage() {

  console.log(aboutUsData[0].members[0].heading);

  return <>
    <div className="about-us-container">
      <div className="history-container">
        <Container75>
      <Heading  pallete="white" type="H1">The original Q-Wiki Project</Heading>
      </Container75>
      <Row>
      <div className="timeline-container">

        {
           qWikiHistory[0].firstPart.map((firstPart, index) =>

           <div key={index} className="timeline-content-container right">
             <div className="timeline-content">
               <TimeLineItem
                 headline={firstPart.heading}
                 content={firstPart.text}
                 />
             </div>
           </div>
      )}
      </div>
        <Image  width={700} backgroundSrc={qWikiHistory[0].screenshots[0].src}/>
    </Row>
    <Row>
          <Image  width={700} backgroundSrc={qWikiHistory[0].screenshots[1].src}/>
          <div className="timeline-container">

            {
               qWikiHistory[0].secondPart.map((secondPart, index) =>

               <div key={index} className="timeline-content-container right">
                 <div className="timeline-content">
                   <TimeLineItem
                     headline={secondPart.heading}
                     content={secondPart.text}
                     />
                 </div>
               </div>
          )}
          </div>
        </Row>
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

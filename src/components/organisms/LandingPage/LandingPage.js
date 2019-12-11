import React from 'react';
import './landingPage.scss';

import Container75 from '../../atoms/Container75/Container75'
import ContainerFullPage from '../../atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from '../../atoms/ContainerHalfPage/ContainerHalfPage'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import MainLogo from '../../atoms/MainLogo/MainLogo'
import TimeLineItem from '../../atoms/TimeLineItem/TimeLineItem'
import Tab from '../../atoms/Tabs/Tab'
import MenuItem from  '../../atoms/MenuItem/MenuItem'
import Image from  '../../atoms/Image/Image'

import Card from '../../molecules/Card/Card'
import CardMember from '../../molecules/CardMember/CardMember'
import Slideshow from '../../molecules/Slideshow/Slideshow'
import NumberDisplay from '../../molecules/NumberDisplay/NumberDisplay'

import { cardsDataLandingPage, qWikiInfo, numberDisplay } from '../../../../src/constants/constants'

import { Row, Col } from 'react-flexbox-grid';
import Iframe from 'react-iframe'

const images = [
  '../../../../src/assets/images/member-1.png',
  '../../../../src/assets/images/member-2.png',
  '../../../../src/assets/images/member-3.png',
  '../../../../src/assets/images/member-4.png',
  '../../../../src/assets/images/member-5.png',
  '../../../../src/assets/images/member-6.png',
];

const firstCardsDataLandingPageElement = cardsDataLandingPage.shift();

export default function LandingPage() {



  return (
    <>
      <Slideshow/>
      <Container75>
      <div className="landingpage_cards-container">
      <Row between="xs">
      <div className="landingpage_cards">
      <Card isLinkExtern link={firstCardsDataLandingPageElement.link} headline={firstCardsDataLandingPageElement.heading} content={firstCardsDataLandingPageElement.text} icon={firstCardsDataLandingPageElement.icon}/>
      </div>
      {
        cardsDataLandingPage.map((cardsData, index) =>
        <div key={index} className="landingpage_cards">
        <Card  routingLink={cardsData.link} headline={cardsData.heading} content={cardsData.text} icon={cardsData.icon}/>
        </div>
      )}
      </Row>
        </div>
      </Container75>
      <div className="qwiki_info-container">
      <Row>
        <Image className="qwiki_info-img-container" backgroundSrc={qWikiInfo[0].screenshotSrc}/>
        <div className="qwiki_info-text-container">
          <div className="qwiki_info-text-container_content">
          <div className="qwiki_info-heading">
              <Heading  pallete="qwikiLightBlue" type="H1">{qWikiInfo[0].heading1}</Heading>
              <Heading  className="qwiki" type="H1">{qWikiInfo[0].heading2}</Heading>
          </div>
              <Paragraph textAlign="justify">{qWikiInfo[0].text}</Paragraph>
            <div className="empty-space"></div>
            <div className="download-qrCode">
            <Paragraph textAlign="justify">{qWikiInfo[0].downloadText}</Paragraph>
          <Image className="qwiki_info-qrCode-img" width={200} backgroundSrc={qWikiInfo[0].qrCode}/>
          </div>
          </div>
        </div>
      </Row>
      </div>
      <div className="numberDisplay">
      <Container75>
      <Row between="xs">
        {
          numberDisplay.map((numberDisplayData, index) =>
            <NumberDisplay key={index} icon={numberDisplayData.icon} headline1={numberDisplayData.heading1} headline2={numberDisplayData.heading2}/>
        )}
      </Row>
    </Container75>
    </div>
    <Row>
      <div className="activities-container">
        <Tab/>
      </div>
      <div className="wikidata-container">
        <Heading  pallete="qwikiLightBlue" type="H1">Wikidata Entry of the Day</Heading>
        <div className="iFrame-container">
        <Iframe url="https://www.wikidata.org/wiki/Special:Random"
        className="iFrame-content"
        frameBorder="0"
        display="initial"
        position="relative"/>
      </div>
      </div>
    </Row>

      <CardMember link="https://github.com/AntoniaBe" backgroundImage={images[5]} headline={'Antonia Berger'} content={'Frontend Developer'}/>



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
<br></br>
<br></br>

    </>
  );
}

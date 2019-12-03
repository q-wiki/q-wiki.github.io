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

import { cardsDataLandingPage, qWikiInfo } from '../../../../src/constants/constants'

import { Row, Col } from 'react-flexbox-grid';

const images = [
  '../../../../src/assets/images/member-1.png',
  '../../../../src/assets/images/member-2.png',
  '../../../../src/assets/images/member-3.png',
  '../../../../src/assets/images/member-4.png',
  '../../../../src/assets/images/member-5.png',
  '../../../../src/assets/images/member-6.png',
];

const firstCardsDataLandingPageElement = cardsDataLandingPage.shift();

function getLastWord(words) {
    let n = words.split(" ");
    return n[n.length - 1];

}

export default function LandingPage() {



  return (
    <>
      <Slideshow/>
      <Container75>
      <Row between="xs">
      <div className="landingpage_cards-container">
      <Card isLinkExtern link={firstCardsDataLandingPageElement.link} headline={firstCardsDataLandingPageElement.heading} content={firstCardsDataLandingPageElement.text} icon={firstCardsDataLandingPageElement.icon}/>
      </div>
      {
        cardsDataLandingPage.map((cardsData, index) =>
        <div key={index} className="landingpage_cards-container">
        <Card  routingLink={cardsData.link} headline={cardsData.heading} content={cardsData.text} icon={cardsData.icon}/>
        </div>
      )}
      </Row>
      </Container75>
      <Row >

        <Image className="qwiki_info-img-container" backgroundSrc={qWikiInfo[0].screenshotSrc}/>
        <div className="qwiki_info-text-container">
            <div className="qwiki_info-text-container_content">
          <div className="qwiki_info-heading">
              <Heading  pallete="qwikiLightBlue" type="H1">{qWikiInfo[0].heading1}</Heading>
              <Heading  className="qwiki" type="H1">{qWikiInfo[0].heading2}</Heading>
          </div>
          <div>
              <Paragraph textAlign="justify">{qWikiInfo[0].text}</Paragraph>
          </div>
          <div>
            {qWikiInfo[0].downloadText}
          </div>
          </div>
          </div>
      </Row>

      <CardMember link="https://github.com/AntoniaBe" backgroundImage={images[5]} headline={'Antonia Berger'} content={'Frontend Developer'}/>

<Tab/>

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

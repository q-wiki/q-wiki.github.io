import React from 'react';
import './landingPage.scss';

import Container75 from '../../atoms/Container75/Container75'
import ContainerFullPage from '../../atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from '../../atoms/ContainerHalfPage/ContainerHalfPage'

import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import MainLogo from '../../atoms/MainLogo/MainLogo'
import Tab from '../../atoms/Tabs/Tab'
import MenuItem from  '../../atoms/MenuItem/MenuItem'
import Image from  '../../atoms/Image/Image'

import Card from '../../molecules/Card/Card'
import Slideshow from '../../molecules/Slideshow/Slideshow'
import NumberDisplay from '../../molecules/NumberDisplay/NumberDisplay'
import ReportDisplay from '../../molecules/ReportDisplay/ReportDisplay'
import WikidataQueryEditor from '../../molecules/WikidataQueryEditor/WikidataQueryEditor'

import { cardsDataLandingPage, qWikiInfo, numberDisplay } from '../../../../src/constants/constants'

import { Row, Col } from 'react-flexbox-grid';
import Iframe from 'react-iframe'


const firstCardsDataLandingPageElement = cardsDataLandingPage.shift();

// this is just here to show how the SparqlEditor can be used
const exampleQuery = `
#Cats, with pictures
#added before 2016-10

#defaultView:ImageGrid
SELECT ?item ?itemLabel ?pic
WHERE
{
?item wdt:P31 wd:Q146 .
?item wdt:P18 ?pic
SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" }
}
`

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
      <Heading  pallete="qwikiLightBlue" type="H1">Current Activities</Heading>
      <div className="latest-query-container">
        <Heading  pallete="qwikiLightBlue" type="H2">Latest Query</Heading>
        <ReportDisplay>
          <WikidataQueryEditor
            onQueryResult={(...args) => console.log('query result', args)}
            onQueryFailure={(...args) => console.log('query failure', args)}>
            {exampleQuery}
          </WikidataQueryEditor>
        </ReportDisplay>
      </div>
      <div className="recently-reported-problems-container">
        <Heading  pallete="qwikiLightBlue" type="H2">Recently Reported Problems</Heading>
        <div className="recently-reported-problems-content">
          <Icon  pallete="qwikiDarkBlue" icon={"report-problem"}  width={192}/>
          <ReportDisplay>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </ReportDisplay>
        </div>

      </div>
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

    </>
  );
}

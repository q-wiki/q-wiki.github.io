import React from 'react'
import './sparqlPage.scss';

import Container75 from '../../atoms/Container75/Container75'
import Card from '../../molecules/Card/Card'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import { Row, Col } from 'react-flexbox-grid';

import { cardsDataContributePage, headerContributePage } from '../../../../src/constants/constants'

const firstCardsDataContributePageElement = cardsDataContributePage.shift();
const secondCardsDataContributePageElement = cardsDataContributePage.shift();

export default function SparqlPage() {


  return <>
  <div className="contribute-header ">
    <Heading  pallete="qwikiGreen" type="H1">{headerContributePage[0].heading}</Heading>
    <Paragraph textAlign="justify">{headerContributePage[0].text}</Paragraph>
</div>

  <div className="contribute-content">
  <Container75>
  <div className="landingpage_cards-container">
  <Row between="xs">
  <div className="landingpage_cards">
      <Card isLinkExtern link={firstCardsDataContributePageElement.link} headline={firstCardsDataContributePageElement.heading} content={firstCardsDataContributePageElement.text} icon={firstCardsDataContributePageElement.icon}/>
    </div>
      <div className="landingpage_cards">
    <Card isLinkExtern link={secondCardsDataContributePageElement.link} headline={secondCardsDataContributePageElement.heading} content={secondCardsDataContributePageElement.text} icon={secondCardsDataContributePageElement.icon}/>
</div>

  {
    cardsDataContributePage.map((cardsData, index) =>
    <div key={index} className="landingpage_cards">
    <Card  routingLink={cardsData.link} headline={cardsData.heading} content={cardsData.text} icon={cardsData.icon}/>
    </div>
  )}
  </Row>
    </div>
  </Container75>
</div>
  </>
}

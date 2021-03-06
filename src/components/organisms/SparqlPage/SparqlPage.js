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
  <div className="contribute-container">
  <div>
  <div className="contribute-header ">
      <div className="contribute-header-container ">
    <Heading  pallete="qwikiOrange" type="H1">{headerContributePage[0].heading}</Heading>
    <Paragraph pallete="white" textAlign="justify">{headerContributePage[0].text}</Paragraph>
    </div>
</div>

  <div className="contribute-content">
  <Container75>
  <div className="contribute_cards-container">
  <Row between="xs">
  <div className="contribute-cards">
      <Card isLinkExtern link={firstCardsDataContributePageElement.link} headline={firstCardsDataContributePageElement.heading} content={firstCardsDataContributePageElement.text} icon={firstCardsDataContributePageElement.icon}/>
    </div>
      <div className="contribute-cards">
    <Card isLinkExtern link={secondCardsDataContributePageElement.link} headline={secondCardsDataContributePageElement.heading} content={secondCardsDataContributePageElement.text} icon={secondCardsDataContributePageElement.icon}/>
</div>

  {
    cardsDataContributePage.map((cardsData, index) =>
    <div key={index} className="contribute-cards">
    <Card  routingLink={cardsData.link} headline={cardsData.heading} content={cardsData.text} icon={cardsData.icon}/>
    </div>
  )}
  </Row>
    </div>
  </Container75>
</div>
</div>
</div>
  </>
}

import React from 'react';
import Icon from '../../atoms/Icon/Icon'
import Heading from '../../atoms/Heading/Heading'
import Paragraph from '../../atoms/Paragraph/Paragraph'
import MainLogo from '../../atoms/MainLogo/MainLogo'
import Tab from '../../atoms/Tabs/Tab'
import MenuItem from  '../../atoms/MenuItem/MenuItem'
import Image from  '../../atoms/Image/Image'
import Container75 from '../../atoms/Container75/Container75'
import SparqlEditor from '../../atoms/SparqlEditor/SparqlEditor'

import Card from '../../molecules/Card/Card'
import Slideshow from '../../molecules/Slideshow/Slideshow'
import NumberDisplay from '../../molecules/NumberDisplay/NumberDisplay'
import ReportDisplay from '../../molecules/ReportDisplay/ReportDisplay'
import WikidataQueryEditor from '../../molecules/WikidataQueryEditor/WikidataQueryEditor'

import { cardsDataLandingPage, qWikiInfo, numberDisplay } from '../../../../src/constants/constants'

import { Row, Col } from 'react-flexbox-grid';
import Button from '../../atoms/Button/Button'
import { inject, observer } from 'mobx-react'
import Minigame from '../../molecules/Minigame/Minigame'
import './landingPage.scss';
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
let dataStore = "";
let query = "";
const yasqe = React.createRef(null);

@inject('dataStore')
@observer
export default class LandingPage extends React.Component{


    render() {
        dataStore = this.props.dataStore;
        return (
            <div className="landingpage">
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
                                    <Icon  className="qwiki_info-qrCode-img" icon={"qr-code"}  width={200} height={200}/>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className="numberDisplay">
                    <Container75>
                        <Row between="xs">
                            {
                                dataStore.stats.stats.map((Data, index) =>
                                    <NumberDisplay key={index} icon={Data.icon} headline1={Data.number} headline2={Data.title}/>
                                )}
                        </Row>
                    </Container75>
                </div>
                <Row>
                    <div className="activities-container">
                        <Heading  pallete="qwikiLightBlue" type="H1">Current Activities</Heading>
                        <div className="latest-query-container">
                            <Heading  pallete="qwikiLightBlue" type="H2">Latest Query</Heading>
                            { dataStore.questions.isLoading? null :
                                <SparqlEditor ref={yasqe}>
                                    {dataStore.questions.questions[0].sparqlQuery}
                                </SparqlEditor>
                            }
                        </div>
                        { true? null:
                            <div className="recently-reported-problems-container">
                                <Heading  pallete="qwikiLightBlue" type="H2">Recently Reported Problems</Heading>
                                <div className="recently-reported-problems-content">
                                    <Icon  pallete="qwikiDarkBlue" icon={"report-problem"}  width={192}/>
                                    <ReportDisplay>
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                    </ReportDisplay>
                                </div>

                            </div>
                        }
                    </div>
                    <div className="wikidata-container">
                        <Heading  pallete="qwikiLightBlue" type="H1">Minigame from SPARQL queries</Heading>
                        { dataStore.questions.isLoading? null :

                            <div className="latest-query-container">
                                <Heading  pallete="qwikiLightBlue" type="H2">Mingame generated by the latest query</Heading>
                                { dataStore.questions.isLoading? null :
                                    <Minigame questionData={dataStore.questions.questions[0]}/>
                                }
                            </div>
                        }
                    </div>
                </Row>

            </div>
        );
    }

}

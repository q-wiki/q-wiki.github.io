import React from "react";
import "./aboutPage.scss";

import Container75 from "../../atoms/Container75/Container75";

import Heading from "../../atoms/Heading/Heading";
import Image from "../../atoms/Image/Image";
import CardMember from "../../molecules/CardMember/CardMember";
import TimeLineItem from "../../atoms/TimeLineItem/TimeLineItem";

import { aboutUsData, qWikiHistory } from "../../../../src/constants/constants";

import { Row, Col } from "react-flexbox-grid";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export default function AboutPage() {
  console.log(aboutUsData[0].htw);

  const shuffledAboutUsData = shuffleArray(aboutUsData[0].members);
  return (
    <>
      <div className="about-us-container">
        <div className="history-container">
          <Container75>
            <div className="history-title ">
              <Heading pallete="white" type="H1">
                The original <span className="Q">Q</span>-Wiki Project
              </Heading>
            </div>
          </Container75>
          <div className="timeline-master-container">
            <div className="timeline-first-container">
              <div className="col-xs-0 col-md-2"></div>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline-ruler">
                    {qWikiHistory[0].firstPart.map((firstPart, index) => (
                      <div
                        key={index}
                        className="timeline-content-container right"
                      >
                        <div className="timeline-content">
                          <TimeLineItem
                            headline={firstPart.heading}
                            content={firstPart.text}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="timeline-img-container">
                <Image
                  className="timeline-img"
                  width={800}
                  backgroundSrc={qWikiHistory[0].screenshots[0].src}
                />
              </div>
            </div>
            <div className="timeline-second-container">
              <div className="timeline-img-container">
                <Image
                  className="timeline-img"
                  width={500}
                  backgroundSrc={qWikiHistory[0].screenshots[1].src}
                />
              </div>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline-ruler">
                    {qWikiHistory[0].secondPart.map((firstPart, index) => (
                      <div
                        key={index}
                        className="timeline-content-container left"
                      >
                        <div className="timeline-content">
                          <TimeLineItem
                            alignmentRight
                            headline={firstPart.heading}
                            content={firstPart.text}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xs-0 col-md-2"></div>
            </div>
          </div>
        </div>
        <div className="qwiki-team-container">
          <div className="members-container">
            <div className="members-title">
              <Heading pallete="qwikiLightBlue" type="H1">
                The <span className="Q">Q</span>-Wiki Team
              </Heading>
            </div>
            <Row center="xs">
              {shuffledAboutUsData.map((aboutUsData, index) => (
                <div key={index} className="members">
                  <CardMember
                    link={aboutUsData.link}
                    backgroundImage={aboutUsData.image}
                    headline={aboutUsData.heading}
                    content={aboutUsData.text}
                  />
                </div>
              ))}
            </Row>
          </div>
          <div className="supervisors-container">
            <div className="wikidata-container">
              <div className="project-supervisor-title">
                <Heading pallete="qwikiLightBlue" type="H1">
                  Project Supervisor - Wikidata
                </Heading>
              </div>
              <Row center="xs">
                {aboutUsData[0].wikidata.map((aboutUsData, index) => (
                  <div key={index} className="members">
                    <CardMember
                      link={aboutUsData.link}
                      backgroundImage={aboutUsData.image}
                      headline={aboutUsData.heading}
                      content={aboutUsData.text}
                    />
                  </div>
                ))}
              </Row>
            </div>
            <div className="htw-container">
              <div className="project-supervisor-title">
                <Heading pallete="qwikiLightBlue" type="H1">
                  Project Supervisor - HTW
                </Heading>
              </div>
              <Row center="xs">
                {aboutUsData[0].htw.map((aboutUsData, index) => (
                  <div key={index} className="members">
                    <CardMember
                      link={aboutUsData.link}
                      backgroundImage={aboutUsData.image}
                      headline={aboutUsData.heading}
                      content={aboutUsData.text}
                    />
                  </div>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

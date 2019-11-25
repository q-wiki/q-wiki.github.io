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


import Card from '../../molecules/Card/Card'
import Slideshow from '../../molecules/Slideshow/Slideshow'

import {LoremIpsum} from 'react-lorem-ipsum'



export default function LandingPage() {
  return (
    <>
      <LoremIpsum/>
      <br></br>
      <br></br>
      <Icon icon="documents" width={90} height={90}/>
      <br></br>
      <br></br>
      <Heading type="H2" pallete="qwikiDarkBlue">
        Sup
      </Heading>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Card headline={'Ich bin eine Headline'} content={'Hello my name is Antonia'} icon="documents"/>
      <br></br>
      <br></br>
      <MainLogo/>
      <br></br>
      <br></br>
      <Tab/>
      <br></br>
      <br></br>
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
      <Slideshow/>

    </>
  );
}

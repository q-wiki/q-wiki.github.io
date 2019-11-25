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

import Card from '../../molecules/Card/Card'

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
      <TimeLineItem/>

    </>
  );
}

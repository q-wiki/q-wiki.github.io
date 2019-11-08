import React, { Component } from 'react'
import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'
import Icon from './components/atoms/Icon/Icon'
import Heading from './components/atoms/Heading/Heading'
import Paragraph from './components/atoms/Paragraph/Paragraph'

import {LoremIpsum} from 'react-lorem-ipsum'

import { Grid } from 'react-flexbox-grid';

import './App.css';

function App() {
  return (
      <Grid fluid>
          <ContainerFullPage>
            <LoremIpsum/>
              <br></br>
              <br></br>
             <Icon icon="documents" width={90} height={90}/>
               <br></br>
               <br></br>
               <Heading type="H2" pallete="turqoise">
                 Food Menu
               </Heading>
               <br></br>
               <br></br>
               <Paragraph left>
                 <LoremIpsum/>
               </Paragraph>
               <br></br>
               <br></br>
               <Paragraph>
                 <LoremIpsum/>
               </Paragraph>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;

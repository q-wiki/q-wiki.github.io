import React, { Component } from 'react'
import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'
import Icon from './components/atoms/Icon/Icon'

import {LoremIpsum} from 'react-lorem-ipsum'

import { Grid } from 'react-flexbox-grid';

import './App.css';

function App() {
  return (
      <Grid fluid>
          <ContainerFullPage>
            <LoremIpsum/>
             <Icon icon="documents" width={90} height={90}/>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;

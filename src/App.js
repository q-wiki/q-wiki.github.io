import React, { Component } from 'react'
import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'
import {LoremIpsum} from 'react-lorem-ipsum'

import { Grid } from 'react-flexbox-grid';

import './App.css';

function App() {
  return (
      <Grid fluid>
          <ContainerFullPage>
            <LoremIpsum/>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;

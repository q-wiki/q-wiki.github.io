import React, { Component } from 'react'

import {LoremIpsum} from 'react-lorem-ipsum'

//Atoms:
import Icon from './components/atoms/Icon/Icon'
import Heading from './components/atoms/Heading/Heading'
import Paragraph from './components/atoms/Paragraph/Paragraph'
import Tab from './components/atoms/Tabs/Tab'
import Container75 from './components/atoms/Container75/Container75'
import ContainerFullPage from './components/atoms/ContainerFullPage/ContainerFullPage'
import ContainerHalfPage from './components/atoms/ContainerHalfPage/ContainerHalfPage'
import Checkbox from './components/atoms/Checkbox/Checkbox'
import TextField from './components/atoms/TextField/TextField'
import TextArea from './components/atoms/TextArea/TextArea'
import Dropdown from './components/atoms/Dropdown/Dropdown'
import Button from './components/atoms/Button/Button'
import AddItemList from './components/atoms/AddItemList/AddItemList'
//Molecules:
import Card from './components/molecules/Card/Card'

//Organisms:


import { Grid } from 'react-flexbox-grid';


import './App.css';

function App() {
  return (
      <Grid fluid>
          <ContainerFullPage>
          </ContainerFullPage>
      </Grid>
  );
}

export default App;
